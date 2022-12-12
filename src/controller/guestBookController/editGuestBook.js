import { Client } from "@notionhq/client";

const notionSecret = "secret_WsQodOj0mpgr6p12JhzFqnbJZxkhJhraJ7WRvyLCofm";

export const editGuestBook = async (req, res) => {
  const notion = new Client({
    auth: notionSecret,
  });

  const {
    body: { user, title, content, emoji },
    params: { id },
  } = req;

  const { icon, properties } = await notion.pages.retrieve({
    page_id: id,
    auth: notionSecret,
  });
  const existContent = properties.content.rich_text[0].plain_text;
  const existTitle = properties.title.title[0].plain_text;
  const existEmoji = icon.emoji;

  const { username, password } = JSON.parse(
    properties.user.rich_text[0].plain_text
  );
  if (user.username !== username || user.password !== password) {
    return res.send({ ok: false });
  }
  await notion.pages.update({
    page_id: id,
    icon: { emoji: emoji ? emoji : existEmoji },
    properties: {
      title: { title: [{ text: { content: title ? title : existTitle } }] },
      content: {
        rich_text: [{ text: { content: content ? content : existContent } }],
      },
    },
  });

  return res.send({ ok: true });
};
