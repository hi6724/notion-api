import { Client } from '@notionhq/client';

const notionSecret = 'secret_WsQodOj0mpgr6p12JhzFqnbJZxkhJhraJ7WRvyLCofm';

export const getPageById = async ({ params: { id } }, res) => {
  try {
    const notion = new Client({
      auth: notionSecret,
    });

    const page = await notion.pages.retrieve({
      page_id: id,
      auth: notionSecret,
    });

    const comments = await notion.comments.list({
      auth: notionSecret,
      block_id: id,
    });

    const pageInfo = {
      id: page.id,
      createdAt: page.properties.createdAt.created_time,
      icon: page.icon ? page.icon : null,
      type: page.properties.type.select.name,
      status: page.properties.status?.select?.name,
      title: page.properties.name.title[0].plain_text,
    };

    const blockChild = await notion.blocks.children.list({
      block_id: id,
      auth: notionSecret,
    });

    // res.send(blockChild);

    const returnArr = blockChild.results
      .map((result) => {
        var type = result.type;
        var payload = result[result.type];
        var link = null;
        var language = '';
        if (type === 'divider') {
          payload = 'divider';
        }

        if (payload.rich_text) {
          if (payload.rich_text.length > 0) {
            if (type == 'code') {
              language = payload.language;
            }
            link = payload.rich_text[0].href;
            // payload = payload.rich_text[0].plain_text;
            payload = payload.rich_text.reduce(
              (acc, value) => acc + value.plain_text,
              ''
            );
          } else {
            type = 'blank';
            payload = '';
          }
        }

        return {
          id: result.id,
          type,
          payload,
          link,
          language,
        };
      })
      .filter((item) => item !== undefined);

    res.send({ comments, pageInfo, child: returnArr });
  } catch (error) {
    res.send(error.body);
  }
};
