import type { GatsbyNode } from "gatsby";

type Person = {
  id: number;
  name: string;
  age: number;
};

export const sourceNodes: GatsbyNode["sourceNodes"] = async ({
  actions,
  createNodeId,
  createContentDigest,
}) => {
  const { createNode } = actions;

  const data = [
    {
      id: 1,
      name: "John",
      age: 12,
    },
    {
      id: 2,
      name: "Smith",
      age: 24,
    },
  ];
  console.log("=========data=====", data);
  data.forEach((person: Person) => {
    const node = {
      ...person,
      parent: null,
      children: [],
      id: createNodeId(`person__${person.id}`),
      internal: {
        type: "Person",
        content: JSON.stringify(person),
        contentDigest: createContentDigest(person),
      },
    };

    createNode(node);
  });
};
