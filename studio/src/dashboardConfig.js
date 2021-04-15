export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "6078604846afef5e56fcf1fa",
                  title: "Sanity Studio",
                  name: "blogtest-sanity-gatsby-studio",
                  apiId: "4c153d80-8b9a-41fa-8e40-fbbe947974a8",
                },
                {
                  buildHookId: "60786048a8875e5ccac57c41",
                  title: "Blog Website",
                  name: "blogtest-sanity-gatsby",
                  apiId: "8c90ffc0-a9a1-493c-a10d-f83b5209fd12",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/lowisren/blogtest-sanity-gatsby",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://blogtest-sanity-gatsby.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
