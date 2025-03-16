// server/index.ts
import express2 from "express";

// server/routes.ts
import { createServer } from "http";

// server/storage.ts
var MemStorage = class {
  projects;
  contacts;
  projectId;
  contactId;
  constructor() {
    this.projects = /* @__PURE__ */ new Map();
    this.contacts = /* @__PURE__ */ new Map();
    this.projectId = 1;
    this.contactId = 1;
    const sampleProjects = [
      {
        title: "LLM & AI Projects",
        description: `Created a market-slogan and study guide generator.
<br/><br/>
<strong>Projects:</strong>
<p style="margin-bottom: 5px"><ul>
  <li>Developed a custom <a href="https://github.com/Arnav92/RNN-Marketing" target="_blank">LSTM-based RNN for marketing slogan
generation</a>, achieving a 30% increase in engagement over standard
templates. Optimized with top-k sampling to improve creativity while
maintaining brand consistency.</li>
<li>Created a <a href="https://github.com/Arnav92/GPT-Study-Generation" target="_blank">personalized study guide generation tool</a> for university
courses using a <em>pre-trained GPT-2 model</em>.</li>
</ul></p>

Both projects can be downloaded and run for the same purposes.`,
        technologies: ["Python", "OpenAI", "Neural Networks"],
        imageUrl: "/images/llmandai.webp"
      },
      {
        title: "Bomberman-inspired Java Game",
        description: `For a university project, me and my partner, <a href="https://www.linkedin.com/in/jaskiratsinghgill/" target="_blank">Jaskirat Singh Gill</a>,
        made a game inspired by the classic <a href="https://www.youtube.com/watch?v=DoFUpG1Ijk0" target="_blank">Bomberman</a>. 
        <br/><br/>
<strong>Key Components:</strong>
<ul>
  <li>Map loading from a file with a pre-defined matching criterion</li>
  <li>Random map picker</li>
  <li>Hybrid enemy pathfinding algorithm, including the A* algorithm</li>
  <li><em>Infinite world generator</em>, which creates an infinite set of levels with increasing difficulty and size.</li>
</ul>`,
        technologies: ["Java", "libGDX", "A*"],
        imageUrl: "/images/bomb_go_boom.png",
        githubUrl: "https://github.com/Arnav92/bomb-go-boom"
      },
      {
        title: "HTML, CSS, Javascript",
        description: `I have made many websites using this web trinity. Some examples are provided in the list below
        <br/><br/>
<strong>Websites:</strong>
<p style="margin-bottom: 5px"><ul>
  <li>A simple, clean, and aesthetic <a href="http://forests.solutions/pricing-card-frontend-mentor-challenge/" target="_blank">pricing card</a> that can be used when signing up users.</li>
  <li>A <a href="http://forests.solutions/Holy-Grail-Layout/" target="_blank">"Holy Grail" layout</a> that can be used as a general purpose template for creating a website, like a blog.</li>
</ul></p>

As I am writing this, I have recently begun learning and using more modern technologies to create websites to make myself a more complete full stack developer.
For example, the website you are currently using was made by me using React, Typescript, Node.js, and more.`,
        technologies: ["HTML", "CSS", "Javascript", "React", "Typescript", "Node.js", "Intellij", "Visual Studio Code"],
        imageUrl: "/images/trinity.webp"
      },
      {
        title: "Unity Games",
        description: `I've explored game development by creating various games in Unity. 
Below is a sample of these projects, along with an image from "Garcade"\u2014a collection where I made all the listed games playable.
        <br/><br/>
<strong><a href="https://itch.io/search?q=ArnavMakesGames" target="_blank">Games</a>:</strong>
<ul>
  <li>A short, beautiful platformer of a cute fox that can wall-jump.</li>
  <li>A goofy game called "Slime Bouncer", where you can throw a slime around that must avoid obstacles and touch a flag to win.</li>
  <li>A flappy bird replica with some adjusted variables through play testing to make a unique experience.</li>
  <li>A fast-paced obstacle avoiding game called "Cubetastic".</li>
</ul>`,
        technologies: ["Unity", "C#"],
        imageUrl: "/images/garcade_3.png",
        projectUrl: "https://drive.google.com/file/d/1D1SxhpOuIbKgnbQpTiUOiT91bfFa7Emr/view"
      },
      {
        title: "IDSST R Projects",
        description: `For university, I had a class called "Introduction to Data Science and Statistical Thinking" (IDSST),
where I used R to tackle real-world applications of data science, teaching me linear and logistic regression, inference, and more.
        <br/><br/>
<strong>Projects:</strong>
<ul>
  <li>Forecasted profits for a bike-renting business, explaining 82% of the
variability in rentals.</li>
  <li>Identified factors influencing low birth weight with 95%+ confidence, 
  including maternal smoking, while analyzing potential effects of age, race, and other variables.
</li>
  <li>Analyzed a sample dataset to model LEGO profits and identify key consumer demographics. 
  Through statistical analysis and data modeling, determined that the 36-50 age group spends the most on LEGO products.</li>
</ul>`,
        technologies: ["R", "Markdown Documents"],
        githubUrl: "https://github.com/Arnav92/R"
      },
      {
        title: "Java Projects",
        description: `I've been passionate about programming since elementary school, inspired by my father, a programmer. 
Though he initially discouraged me, I finally started coding in 8th grade when a laptop became mandatory for school. 
I began with Java in Notepad, later transitioning to Eclipse, where I built numerous projects (some listed below).
<br/><br/>
Teaching myself to code was challenging but deeply rewarding, strengthening my resilience and passion for programming. 
Years later, I honed my skills further through my university's "Introduction to Programming" (ITP) course, mastering Java fundamentals.
        <br/><br/>
<strong>Projects:</strong>
<ul>
  <li>A WhatsApp-inspired messanger system.</li>
  <li>A local multiplayer fast-paced snake game.</li>
  <li>A program that can create very basic animations.</li>
</ul>`,
        technologies: ["Java", "Command Prompt", "Eclipse", "Intellij"],
        githubUrl: "https://github.com/Arnav92/java-projects"
      },
      {
        title: "Additional Skills",
        description: `
While I've highlighted some of my key projects, I've also worked on numerous smaller projects across various technologies. 
These projects have strengthened my problem-solving skills and expanded my expertise in multiple areas.  
<br/><br/>
Beyond the projects listed, my skills include (but are not limited to):  
<ul>
  <li><strong>Python & Django:</strong> Assisted in developing a website for TUFast Eco.</li>
  <li><strong>SQL:</strong> Experience in database management and querying. Learned during my "Introduction into Computer Science" course in university.</li>
  <li><strong>Git & GitHub:</strong> Proficient in version control and collaborative development.</li>
  <li><strong>C# & Micropython:</strong> Used Micropython to create a smoothly transitioning light for an internship.</li>
  <li><strong>Mathematics:</strong> Studied Mathematics in Natural and Economic Science 1 & 2 at university.</li>
</ul>
Even though these projects are smaller in scale, they have played a crucial role in shaping my technical proficiency.
`,
        technologies: ["Python", "SQL", "Git & Github", "C#", "Django", "Micropython"]
      }
    ];
    sampleProjects.forEach((project) => {
      this.createProject(project);
    });
  }
  async getProjects() {
    return Array.from(this.projects.values());
  }
  async getProject(id) {
    return this.projects.get(id);
  }
  async createProject(project) {
    const id = this.projectId++;
    const newProject = { ...project, id };
    this.projects.set(id, newProject);
    return newProject;
  }
  async createContact(contact) {
    const id = this.contactId++;
    const newContact = { ...contact, id };
    this.contacts.set(id, newContact);
    return newContact;
  }
};
var storage = new MemStorage();

// shared/schema.ts
import { pgTable, text, serial } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
var projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  technologies: text("technologies").array().notNull(),
  imageUrl: text("image_url").notNull(),
  projectUrl: text("project_url"),
  githubUrl: text("github_url")
});
var contacts = pgTable("contacts", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  message: text("message").notNull()
});
var insertProjectSchema = createInsertSchema(projects).omit({ id: true });
var insertContactSchema = createInsertSchema(contacts).omit({ id: true });

// server/routes.ts
import { z } from "zod";
async function registerRoutes(app2) {
  app2.get("/api/projects", async (_req, res) => {
    const projects2 = await storage.getProjects();
    res.json(projects2);
  });
  app2.get("/api/projects/:id", async (req, res) => {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({ message: "Invalid project ID" });
    }
    const project = await storage.getProject(id);
    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }
    res.json(project);
  });
  app2.post("/api/contact", async (req, res) => {
    try {
      const contact = insertContactSchema.parse(req.body);
      const result = await storage.createContact(contact);
      res.status(201).json(result);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid contact form data" });
      }
      throw error;
    }
  });
  const httpServer = createServer(app2);
  return httpServer;
}

// server/vite.ts
import express from "express";
import fs from "fs";
import path2, { dirname as dirname2 } from "path";
import { fileURLToPath as fileURLToPath2 } from "url";
import { createServer as createViteServer, createLogger } from "vite";

// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import themePlugin from "@replit/vite-plugin-shadcn-theme-json";
import path, { dirname } from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
import { fileURLToPath } from "url";
var __filename = fileURLToPath(import.meta.url);
var __dirname = dirname(__filename);
var vite_config_default = defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    themePlugin(),
    ...process.env.NODE_ENV !== "production" && process.env.REPL_ID !== void 0 ? [
      await import("@replit/vite-plugin-cartographer").then(
        (m) => m.cartographer()
      )
    ] : []
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"),
      "@shared": path.resolve(__dirname, "shared")
    }
  },
  root: path.resolve(__dirname, "client"),
  build: {
    outDir: path.resolve(__dirname, "dist/public"),
    emptyOutDir: true
  }
});

// server/vite.ts
import { nanoid } from "nanoid";
var __filename2 = fileURLToPath2(import.meta.url);
var __dirname2 = dirname2(__filename2);
var viteLogger = createLogger();
function log(message, source = "express") {
  const formattedTime = (/* @__PURE__ */ new Date()).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });
  console.log(`${formattedTime} [${source}] ${message}`);
}
async function setupVite(app2, server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true
  };
  const vite = await createViteServer({
    ...vite_config_default,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      }
    },
    server: serverOptions,
    appType: "custom"
  });
  app2.use(vite.middlewares);
  app2.use("*", async (req, res, next) => {
    const url = req.originalUrl;
    try {
      const clientTemplate = path2.resolve(
        __dirname2,
        "..",
        "client",
        "index.html"
      );
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });
}
function serveStatic(app2) {
  const distPath = path2.resolve(__dirname2, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }
  app2.use(express.static(distPath));
  app2.use("*", (_req, res) => {
    res.sendFile(path2.resolve(distPath, "index.html"));
  });
}

// server/index.ts
var app = express2();
app.use(express2.json());
app.use(express2.urlencoded({ extended: false }));
app.use((req, res, next) => {
  const start = Date.now();
  const path3 = req.path;
  let capturedJsonResponse = void 0;
  const originalResJson = res.json;
  res.json = function(bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };
  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path3.startsWith("/api")) {
      let logLine = `${req.method} ${path3} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "\u2026";
      }
      log(logLine);
    }
  });
  next();
});
(async () => {
  const server = await registerRoutes(app);
  app.use((err, _req, res, _next) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    throw err;
  });
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }
  const port = process.env.PORT || 5e3;
  const host = "0.0.0.0";
  server.listen(port, host, () => {
    log(`serving on http://${host}:${port}`);
  });
})();
