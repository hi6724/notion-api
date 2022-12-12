import { Client } from "@notionhq/client";

const notionSecret = "secret_WsQodOj0mpgr6p12JhzFqnbJZxkhJhraJ7WRvyLCofm";
const database_id = "cf6dea8440b04e5c85cf9bc986f546b7";

export const createGuestBook = async (req, res) => {
  const notion = new Client({
    auth: notionSecret,
  });

  const {
    body: { user, title, content },
  } = req;

  const result = await notion.pages.create({
    parent: { database_id },
    icon: { emoji: "🥬" },
    properties: {
      title: { title: [{ text: { content: title } }] },
      content: { rich_text: [{ text: { content } }] },
      user: { rich_text: [{ text: { content: JSON.stringify(user) } }] },
    },
  });

  res.send({ ok: true, ...result });
};
