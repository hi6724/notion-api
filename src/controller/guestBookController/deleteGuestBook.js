import { Client } from "@notionhq/client";

const notionSecret = "secret_WsQodOj0mpgr6p12JhzFqnbJZxkhJhraJ7WRvyLCofm";

export const deleteGuestBook = async (req, res) => {
  const notion = new Client({
    auth: notionSecret,
  });

  const {
    body: { user },
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
  await notion.blocks.delete({
    block_id: id,
    auth: notionSecret,
  });
  return res.send({ ok: true });
};
