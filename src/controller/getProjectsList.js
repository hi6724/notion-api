import { Client } from "@notionhq/client";

const database_id = "68009bd6df9640f9b09322eb70a3dee5";
const notionSecret = "secret_WsQodOj0mpgr6p12JhzFqnbJZxkhJhraJ7WRvyLCofm";

export const getProjectList = async (req, res) => {
  try {
    const notion = new Client({
      auth: notionSecret,
    });

    const projects = await notion.databases.query({
      database_id,
      auth: notionSecret,
    });

    const returnObj = projects.results.map((result) => {
      const id = result.id;
      const icon = result.icon;
      const startData = result.properties.date.date.start;
      const endDate = result.properties.date.date.end;
      const type = result.properties.type.select.name;
      const skills = result.properties.skills?.multi_select.map(
        (skill) => skill.name
      );
      const title = result.properties.name.title[0].plain_text;
      return { id, icon, startData, endDate, type, title, skills };
    });

    res.send(returnObj);
  } catch (error) {
    res.send(error);
  }
};
