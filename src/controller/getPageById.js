import { Client } from "@notionhq/client";

const notionDatabaseId = "46055058d58743b1936f395c3dbac43c";
const notionSecret = "secret_CMIno6AJsiCyPkfetNN7oNqo8dxMH5pzcv0EZ93pJcs";

export const getPageById = async ({ params: { id } }, res) => {
  const notion = new Client({
    auth: notionSecret,
  });

  const page = await notion.pages.retrieve({
    page_id: id,
    auth: notionSecret,
  });

  const blockChild = await notion.blocks.children.list({
    block_id: id,
    auth: notionSecret,
  });
  // const returnArr = blockChild.results
  //   .map((result) => {
  //     const richText = result[result.type].rich_text[0];
  //     if (richText) {
  //       const type = result[result.type].rich_text[0].type;
  //       return { type: result.type, ...richText[type] };
  //     }
  //   })
  //   .filter((item) => item !== undefined);

  res.send({ page, child: blockChild.results });
};
