import { Client } from "@notionhq/client";

const notionSecret = "secret_WsQodOj0mpgr6p12JhzFqnbJZxkhJhraJ7WRvyLCofm";

export const editGuestBook = async (req, res) => {
  const notion = new Client({
    auth: notionSecret,
  });

  const {
    body: { user, title, content },
    params: { id },
  } = req;

  const page = await notion.pages.retrieve({
    page_id: id,
    auth: notionSecret,
  });
  const { username, password } = JSON.parse(
    page.properties.user.rich_text[0].plain_text
  );
  if (user.username !== username || user.password !== password) {
    return res.send({ ok: false });
  }
  await notion.pages.update({
    page_id: id,
    properties: {
      title: { title: [{ text: { content: title } }] },
      content: { rich_text: [{ text: { content } }] },
    },
  });

  return res.send({ ok: true });
};
