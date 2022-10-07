import { Client } from "@notionhq/client";

const notionSecret = "secret_WsQodOj0mpgr6p12JhzFqnbJZxkhJhraJ7WRvyLCofm";

export const createCommentById = async (req, res) => {
  const notion = new Client({
    auth: notionSecret,
  });

  const {
    body: { payload, nickname },
    params: { id },
  } = req;

  const result = await notion.comments.create({
    parent: {
      page_id: id,
    },
    rich_text: [
      {
        text: {
          content: nickname + ":" + payload,
        },
      },
    ],
  });

  res.send({ ok: true, ...result });
};
