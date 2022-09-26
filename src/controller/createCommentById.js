import { Client } from "@notionhq/client";

const notionSecret = "secret_CMIno6AJsiCyPkfetNN7oNqo8dxMH5pzcv0EZ93pJcs";
const testId = "802466d3-b186-484b-8adc-76431bff20b4";

export const createCommentById = async (req, res) => {
  //   const notion = new Client({
  //     auth: notionSecret,
  //   });
  //   const result = await notion.comments.create({
  //     parent: testId,
  //     rich_text: "Test",
  //   });
  const { id, payload, nickname } = req.body;
  res.send(req.body);
};
