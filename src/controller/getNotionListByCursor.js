import { Client } from '@notionhq/client';

const notionDatabaseId = '8a3bdeb10ce94834a5ba6a8476f4d43c';
const notionSecret = 'secret_WsQodOj0mpgr6p12JhzFqnbJZxkhJhraJ7WRvyLCofm';

export const getNotionListByCursor = async (req, res) => {
  try {
    const notion = new Client({
      auth: notionSecret,
    });
    const { cursor } = req.params;
    const page = await notion.databases.query({
      database_id: notionDatabaseId,
      auth: notionSecret,
      page_size: req.query.count * 1,
      sorts: [
        {
          property: 'createdAt',
          direction: req.query.sort === 'asc' ? 'ascending' : 'descending',
        },
      ],
      ...(cursor != 0 && { start_cursor: cursor }),
      ...(req.query.filter &&
        req.query.filter !== 'all' &&
        req.query.filter !== 'others' && {
          filter: {
            and: [
              {
                property: 'type',
                select: { equals: req.query.filter },
              },
            ],
          },
        }),
      ...(req.query.filter === 'others' && {
        filter: {
          and: [
            {
              property: 'type',
              select: {
                does_not_equal: 'frontend',
              },
            },
            {
              property: 'type',
              select: {
                does_not_equal: 'backend',
              },
            },
            {
              property: 'type',
              select: {
                does_not_equal: 'algorithm',
              },
            },
          ],
        },
      }),
    });

    const returnObj = page.results.map((result) => {
      const id = result.id;
      const createdAt = result.properties.createdAt.created_time;
      const icon = result.icon;
      const type = result.properties.type.select.name;
      const title = result.properties.name.title[0].plain_text;
      return { id, createdAt, icon, type, title };
    });
    res.send({
      next_cursor: page.next_cursor,
      has_more: page.has_more,
      results: returnObj,
    });
  } catch (error) {
    res.send(error.body);
  }
};
