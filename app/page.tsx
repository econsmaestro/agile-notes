"use client";

import { useState } from "react";

/* ─────────────────── DATA ─────────────────── */

interface KeyPoint {
  label: string;
  value: string;
}

interface TableData {
  headers: string[];
  rows: string[][];
  note?: string;
}

interface ChapterContent {
  type: "paragraph" | "bullets" | "numbered" | "table" | "note" | "subheading" | "code" | "ui-hint";
  text?: string;
  items?: string[];
  table?: TableData;
  code?: { label?: string; lines: string[] };
}

interface Chapter {
  id: string;
  number: string;
  title: string;
  summary: string;
  content: ChapterContent[];
  keyPoints?: KeyPoint[];
}

interface Course {
  id: string;
  title: string;
  subtitle: string;
  chapters: Chapter[];
}

const agileFundamentals: Course = {
  id: "agile-fundamentals",
  title: "Agile Fundamentals",
  subtitle: "LinkedIn Learning — Agile Foundations (4.7 ★, 38,791 reviews)",
  chapters: [
    {
      id: "intro",
      number: "Intro",
      title: "Understanding Agile",
      summary:
        "A brief orientation to what agile is, why it matters, and how this course is structured.",
      content: [
        {
          type: "paragraph",
          text: "Agile is a mindset and a set of practices that help teams deliver value to customers faster and more reliably. Born from frustration with heavyweight, document-driven software methods, agile prioritises people, working products, and the ability to respond to change.",
        },
        {
          type: "subheading",
          text: "Why Agile?",
        },
        {
          type: "bullets",
          items: [
            "Software requirements are unpredictable — they change as customers learn what they actually need.",
            "Traditional waterfall methods defer feedback until the end, making corrections expensive.",
            "Agile shortens feedback loops so problems surface early, when they are cheap to fix.",
            "Teams that adopt agile consistently report higher quality, faster delivery, and better morale.",
          ],
        },
      ],
    },
    {
      id: "ch1",
      number: "Chapter 1",
      title: "Modern Software Development",
      summary:
        "Explores why traditional waterfall approaches struggle with software and how knowledge-worker dynamics demand a different management style.",
      content: [
        {
          type: "subheading",
          text: "The Rise of Knowledge Workers",
        },
        {
          type: "paragraph",
          text: "Unlike factory workers who repeat defined tasks, knowledge workers — developers, designers, analysts — are paid to think, innovate, and solve novel problems. Managing them like assembly-line workers stifles creativity and kills productivity.",
        },
        {
          type: "bullets",
          items: [
            "Knowledge workers need autonomy, mastery, and purpose (Daniel Pink's framework) to perform at their best.",
            "Micromanagement and rigid processes signal distrust and reduce intrinsic motivation.",
            "Effective teams need psychological safety to raise problems, experiment, and learn from failure.",
          ],
        },
        {
          type: "subheading",
          text: "The Waterfall Problem",
        },
        {
          type: "paragraph",
          text: "The waterfall model sequences work in distinct phases: Plan → Analyse → Design → Code → Test → Deploy. Each phase must complete before the next begins.",
        },
        {
          type: "table",
          table: {
            headers: ["Waterfall Assumption", "Reality in Software"],
            rows: [
              ["Requirements are known up-front", "Customers discover what they want as they see it"],
              ["Design can precede implementation", "Architecture decisions reveal themselves during coding"],
              ["Testing happens at the end", "Late defects are 10–100× more expensive to fix"],
              ["Change is an exception", "Change is the norm — markets and user needs evolve constantly"],
            ],
          },
        },
        {
          type: "subheading",
          text: "The Agile Alternative",
        },
        {
          type: "bullets",
          items: [
            "Deliver in short iterations (sprints) of 1–4 weeks rather than one big release.",
            "Get real customer feedback after every iteration — not just at the end.",
            "Accept and embrace changing requirements even late in development.",
            "Build cross-functional teams that can design, build, and ship without hand-offs.",
          ],
        },
      ],
      keyPoints: [
        { label: "Core shift", value: "From command-and-control to trust and autonomy" },
        { label: "Root cause of waterfall failure", value: "Assumptions made early that are invalidated late" },
        { label: "Agile fix", value: "Short cycles that surface assumptions quickly so they can be corrected cheaply" },
      ],
    },
    {
      id: "ch2",
      number: "Chapter 2",
      title: "Have an Agile Mindset",
      summary:
        "Introduces the Agile Manifesto — its four core values and twelve principles — and explains the mindset shift required to truly practise agile.",
      content: [
        {
          type: "subheading",
          text: "The Agile Manifesto (2001)",
        },
        {
          type: "paragraph",
          text: "In February 2001, seventeen software practitioners gathered at a ski resort in Snowbird, Utah, and produced the Agile Manifesto. It prioritises four core values:",
        },
        {
          type: "table",
          table: {
            headers: ["Over…", "We value…"],
            rows: [
              ["Processes and tools", "Individuals and interactions"],
              ["Comprehensive documentation", "Working software"],
              ["Contract negotiation", "Customer collaboration"],
              ["Following a plan", "Responding to change"],
            ],
            note: "The items on the right are still valuable — Agile simply values the items on the left more.",
          },
        },
        {
          type: "subheading",
          text: "The 12 Agile Principles",
        },
        {
          type: "numbered",
          items: [
            "Satisfy the customer through early and continuous delivery of valuable software.",
            "Welcome changing requirements, even late in development.",
            "Deliver working software frequently — from a couple of weeks to a couple of months.",
            "Business people and developers must work together daily throughout the project.",
            "Build projects around motivated individuals; give them the environment and trust they need.",
            "Face-to-face conversation is the most efficient and effective method of conveying information.",
            "Working software is the primary measure of progress.",
            "Agile processes promote sustainable development — the team should be able to maintain a constant pace indefinitely.",
            "Continuous attention to technical excellence and good design enhances agility.",
            "Simplicity — the art of maximising the amount of work not done — is essential.",
            "The best architectures, requirements, and designs emerge from self-organising teams.",
            "At regular intervals, the team reflects on how to become more effective, then tunes and adjusts its behaviour.",
          ],
        },
        {
          type: "subheading",
          text: "Mindset vs. Practices",
        },
        {
          type: "note",
          text: "Many teams adopt agile ceremonies (stand-ups, sprints, retros) without the underlying mindset. This is often called 'cargo cult agile' — going through the motions without understanding the why. True agility requires believing that people matter more than processes and that change is an opportunity, not a threat.",
        },
      ],
      keyPoints: [
        { label: "Key insight", value: "Agile is a mindset first; practices are just expressions of that mindset" },
        { label: "Common pitfall", value: "Adopting ceremonies without the values — 'doing agile' instead of 'being agile'" },
        { label: "Manifesto origin", value: "17 practitioners, Snowbird Utah, February 2001" },
      ],
    },
    {
      id: "ch3",
      number: "Chapter 3",
      title: "Individuals and Interactions",
      summary:
        "Covers the human side of agile: eliminating multitasking, reducing work handoffs, and capturing requirements as user stories.",
      content: [
        {
          type: "subheading",
          text: "The Cost of Multitasking",
        },
        {
          type: "paragraph",
          text: "Context-switching between tasks is far more expensive than it feels. Research shows that switching between two tasks reduces productive time by 20%; switching between three tasks can slash it by 40% or more.",
        },
        {
          type: "bullets",
          items: [
            "Every time a developer switches context, they lose the mental model of the previous task and must rebuild it — that rebuilding time is waste.",
            "Multitasking creates the illusion of progress while actually slowing everything down.",
            "Agile limits Work-In-Progress (WIP) so team members finish tasks before starting new ones.",
          ],
        },
        {
          type: "subheading",
          text: "Avoiding Work Handoffs",
        },
        {
          type: "paragraph",
          text: "Every time work passes from one person or team to another, information is lost, delays are introduced, and defects are created. Agile teams are cross-functional precisely to minimise these handoffs.",
        },
        {
          type: "bullets",
          items: [
            "In waterfall, work passes from analyst → designer → developer → tester → ops. Each boundary is a bottleneck and a source of miscommunication.",
            "Agile teams embed all necessary skills (design, dev, test, ops) on one team, removing the handoff queues.",
            "Pair programming and mob programming are extreme reductions of handoffs — multiple people work on the same thing simultaneously.",
          ],
        },
        {
          type: "subheading",
          text: "The Penny Game",
        },
        {
          type: "paragraph",
          text: "A classroom simulation where participants flip coins in batches (20 at a time vs. 5 at a time vs. 1 at a time). The results consistently demonstrate that smaller batch sizes lead to faster flow and earlier delivery of value, because the first customer receives their coins sooner.",
        },
        {
          type: "note",
          text: "Lesson: Large batch sizes feel efficient because you 'do less switching', but they delay every downstream customer until the whole batch is ready. Small batches deliver value faster and surface defects sooner.",
        },
        {
          type: "subheading",
          text: "User Stories",
        },
        {
          type: "paragraph",
          text: "User stories are a lightweight way to capture requirements from the user's perspective, encouraging conversation over specification.",
        },
        {
          type: "paragraph",
          text: "Format: \"As a [type of user], I want [some goal] so that [some reason/benefit].\"",
        },
        {
          type: "subheading",
          text: "INVEST Criteria for Good User Stories",
        },
        {
          type: "table",
          table: {
            headers: ["Letter", "Criterion", "What it means"],
            rows: [
              ["I", "Independent", "Can be developed and delivered on its own, without requiring another story"],
              ["N", "Negotiable", "The details are a conversation, not a contract — PO and team negotiate scope"],
              ["V", "Valuable", "Delivers clear, measurable value to an end user or the business"],
              ["E", "Estimable", "The team can estimate the effort — if they can't, the story needs more clarity"],
              ["S", "Small", "Fits within a single sprint; large stories should be split into smaller ones"],
              ["T", "Testable", "Acceptance criteria exist that clearly define when the story is done"],
            ],
          },
        },
      ],
      keyPoints: [
        { label: "WIP limit principle", value: "Stop starting; start finishing" },
        { label: "Handoff cost", value: "Every boundary between teams is a source of delay and defects" },
        { label: "Batch size insight", value: "Smaller batches = faster feedback and earlier customer value" },
        { label: "Story format", value: "As a [user], I want [goal] so that [benefit]" },
      ],
    },
    {
      id: "ch4",
      number: "Chapter 4",
      title: "Deliver Working Software",
      summary:
        "Focuses on how agile teams prioritise and visualise work to ensure continuous delivery of real, demonstrable value.",
      content: [
        {
          type: "subheading",
          text: "Start with the Highest Value",
        },
        {
          type: "paragraph",
          text: "Agile teams work from a prioritised backlog. The Product Owner is responsible for ordering the backlog so the highest-value items are always at the top — meaning the team always works on what matters most.",
        },
        {
          type: "bullets",
          items: [
            "Value is measured by customer impact, business revenue, risk reduction, or strategic importance.",
            "Technical tasks (infrastructure, refactoring) are still prioritised by the business value they enable.",
            "If a project were cancelled after one sprint, you'd want the most important things already shipped.",
          ],
        },
        {
          type: "subheading",
          text: "Prioritise with a Taskboard",
        },
        {
          type: "paragraph",
          text: "A taskboard (also called a Kanban or Scrum board) makes all work visible at a glance. Columns typically represent workflow states:",
        },
        {
          type: "table",
          table: {
            headers: ["To Do", "In Progress", "In Review", "Done"],
            rows: [
              ["Stories not yet started", "Actively being worked on (limit WIP!)", "Awaiting peer review or QA", "Complete, accepted, deployable"],
            ],
          },
        },
        {
          type: "bullets",
          items: [
            "Visibility exposes bottlenecks — when work piles up in one column, the team investigates and swarms to fix it.",
            "WIP limits (e.g. max 3 items In Progress) prevent multitasking and force collaboration.",
            "Physical boards work well co-located; digital tools (Jira, Linear, Trello) support distributed teams.",
          ],
        },
        {
          type: "subheading",
          text: "Avoid PowerPoint — Show Working Software",
        },
        {
          type: "paragraph",
          text: "Slide decks are easy to polish and can create false confidence. Working software is honest — it either works or it doesn't. Agile teams demonstrate real software at the end of every sprint rather than presenting status reports.",
        },
        {
          type: "note",
          text: "The Agile Manifesto principle: 'Working software is the primary measure of progress.' A green build and a live demo are worth more than a hundred slides.",
        },
        {
          type: "subheading",
          text: "Definition of Done (DoD)",
        },
        {
          type: "paragraph",
          text: "A shared, written agreement on what 'complete' means for any piece of work. Prevents the common trap of stories that are 'done' according to the developer but need weeks more work before they can ship.",
        },
        {
          type: "bullets",
          items: [
            "Typical DoD: code written, unit tests pass, code reviewed, integration tests pass, documentation updated, deployed to staging.",
            "The DoD is agreed by the whole team and evolves over time as quality standards improve.",
            "Stories not meeting the DoD at the end of a sprint are not counted as complete — they go back to the backlog.",
          ],
        },
      ],
      keyPoints: [
        { label: "Prioritisation rule", value: "Highest business value first, always" },
        { label: "Board principle", value: "Make all work visible; WIP limits enforce focus" },
        { label: "Measure of progress", value: "Working, tested, deployable software — not slides" },
        { label: "DoD purpose", value: "Shared definition of 'done' prevents half-finished work piling up" },
      ],
    },
    {
      id: "ch5",
      number: "Chapter 5",
      title: "Respond to Change",
      summary:
        "Examines agile's core promise: the ability to change direction quickly through timeboxing, iterative delivery, and empirical process control.",
      content: [
        {
          type: "subheading",
          text: "Inspect and Adapt",
        },
        {
          type: "paragraph",
          text: "Agile is built on empirical process control: you make a small change, observe what happens, and adjust. This is the opposite of waterfall's 'plan everything then execute' approach.",
        },
        {
          type: "bullets",
          items: [
            "Every sprint ends with a Retrospective: What went well? What could improve? What will we change next sprint?",
            "Teams that skip retros miss their primary mechanism for improving.",
            "Inspection without adaptation is just complaining — the team must commit to specific, actionable changes.",
          ],
        },
        {
          type: "subheading",
          text: "Stay Within Timeboxes",
        },
        {
          type: "paragraph",
          text: "A timebox is a fixed-duration window of time with a defined goal. Timeboxes force trade-offs and prevent perfectionism.",
        },
        {
          type: "bullets",
          items: [
            "Sprint length is fixed (commonly 2 weeks). If everything in the sprint can't be completed, scope is cut — not the deadline.",
            "Timeboxing applies to ceremonies too: a 15-minute daily standup that regularly runs 30 minutes is a symptom of missing structure.",
            "Predictable cadences build team rhythm and stakeholder trust.",
          ],
        },
        {
          type: "subheading",
          text: "Jump off the Waterfall",
        },
        {
          type: "paragraph",
          text: "Waterfall concentrates all risk at the end of a project — you only know if it worked after months (or years) of development. Agile surfaces risk at the beginning of each sprint.",
        },
        {
          type: "table",
          table: {
            headers: ["Waterfall", "Agile (Iterative)"],
            rows: [
              ["One big release at the end", "Frequent small releases every sprint"],
              ["Feedback after months/years", "Feedback after days/weeks"],
              ["Risk discovered late (expensive)", "Risk discovered early (cheap to fix)"],
              ["Change is treated as failure", "Change is expected and accommodated"],
              ["Customer sees product at go-live", "Customer sees product after every sprint"],
            ],
          },
        },
        {
          type: "subheading",
          text: "Commit to Sprints",
        },
        {
          type: "paragraph",
          text: "A sprint is a short, fixed-length iteration (typically 1–4 weeks) during which the team delivers a potentially shippable product increment. The sprint goal is fixed once planning is complete; work can be added to the next sprint but not injected mid-sprint (protecting the team's focus).",
        },
        {
          type: "subheading",
          text: "Iterative Delivery",
        },
        {
          type: "paragraph",
          text: "Iterative delivery means building the product in layered passes — each pass adds more capability and refinement. This is different from incremental delivery (just adding more pieces), because each iteration revisits and improves earlier work based on feedback.",
        },
        {
          type: "note",
          text: "The MVP (Minimum Viable Product) principle: ship the smallest possible product that delivers real value, gather feedback, then iterate. Don't wait for 'perfect' — ship 'good enough' and improve.",
        },
      ],
      keyPoints: [
        { label: "Empirical process", value: "Observe → Inspect → Adapt — repeat every sprint" },
        { label: "Timebox rule", value: "Cut scope, not the deadline — fixed end date forces hard prioritisation" },
        { label: "Waterfall vs agile risk", value: "Waterfall bets everything on one late delivery; agile hedges with many small deliveries" },
        { label: "Sprint protection", value: "No scope injection mid-sprint — new requests go to the next sprint" },
      ],
    },
    {
      id: "ch6",
      number: "Chapter 6",
      title: "Popular Agile Frameworks",
      summary:
        "Surveys the three most widely used agile frameworks — Scrum, Extreme Programming (XP), and Kanban — and when to use each.",
      content: [
        {
          type: "subheading",
          text: "Scrum",
        },
        {
          type: "paragraph",
          text: "Scrum is the most popular agile framework. It organises work into fixed-length sprints and defines clear roles, events, and artefacts.",
        },
        {
          type: "table",
          table: {
            headers: ["Element", "Details"],
            rows: [
              ["Roles", "Product Owner · Scrum Master · Development Team"],
              ["Events", "Sprint Planning · Daily Scrum · Sprint Review · Sprint Retrospective"],
              ["Artefacts", "Product Backlog · Sprint Backlog · Increment (Definition of Done)"],
              ["Sprint length", "1–4 weeks (most teams use 2 weeks)"],
              ["Team size", "3–9 developers plus PO and SM"],
            ],
          },
        },
        {
          type: "subheading",
          text: "Extreme Programming (XP)",
        },
        {
          type: "paragraph",
          text: "XP focuses on engineering practices that enable teams to sustain high quality and high velocity. It complements Scrum well.",
        },
        {
          type: "bullets",
          items: [
            "Test-Driven Development (TDD): write the failing test first, then write code to pass it.",
            "Pair Programming: two developers work at one computer — one types, one reviews in real time.",
            "Continuous Integration (CI): every commit triggers an automated build and test suite.",
            "Refactoring: continuously improving internal code quality without changing external behaviour.",
            "Short releases: deploy working software frequently, sometimes multiple times per day.",
            "Collective code ownership: anyone can improve any part of the codebase.",
          ],
        },
        {
          type: "subheading",
          text: "Kanban",
        },
        {
          type: "paragraph",
          text: "Kanban is a flow-based approach that visualises work on a board and limits the amount of work in progress at any time. Unlike Scrum, Kanban has no fixed iterations or prescribed roles.",
        },
        {
          type: "bullets",
          items: [
            "Visualise work: every work item is a card on the board, visible to all.",
            "Limit WIP: each column has a maximum number of items allowed — forces completion before starting new work.",
            "Manage flow: the goal is smooth, fast movement from left to right with no bottlenecks.",
            "Make policies explicit: team agrees on rules for moving cards between columns.",
            "Improve collaboratively: use metrics (cycle time, throughput) to identify and fix bottlenecks.",
          ],
        },
        {
          type: "table",
          table: {
            headers: ["Framework", "Best for", "Key distinction"],
            rows: [
              ["Scrum", "Teams building new products in regular sprint cycles", "Fixed-length sprints, defined roles and ceremonies"],
              ["XP", "Teams that want rigorous engineering quality practices", "Focus on technical excellence — TDD, pairing, CI"],
              ["Kanban", "Support/maintenance teams with unpredictable incoming work", "Continuous flow, no sprints, WIP limits"],
            ],
          },
        },
      ],
      keyPoints: [
        { label: "Market share", value: "Scrum is used by ~70% of agile teams" },
        { label: "XP vs Scrum", value: "Scrum = what to do and when; XP = how to build it well" },
        { label: "Kanban strength", value: "No cadence needed — ideal for ongoing support queues" },
        { label: "Hybrid", value: "Many teams use Scrum + XP together (sometimes called 'Scrumban' or 'XP in Scrum')" },
      ],
    },
    {
      id: "ch7",
      number: "Chapter 7",
      title: "Improve Customer Collaboration",
      summary:
        "Explores the team roles and collaborative techniques that keep customers closely involved and prevent the groupthink that undermines good decision-making.",
      content: [
        {
          type: "subheading",
          text: "Common Roles on an Agile Team",
        },
        {
          type: "bullets",
          items: [
            "Product Owner (PO): the single voice of the customer on the team. Owns the product backlog, prioritises stories, and accepts or rejects completed work.",
            "Scrum Master (SM): servant leader and agile coach. Facilitates ceremonies, removes impediments, and protects the team from disruption.",
            "Development Team: cross-functional group of 3–9 people with all the skills needed to deliver a working increment. No sub-teams or specialists silos.",
            "Stakeholders: customers, business sponsors, and subject-matter experts who participate in Sprint Reviews and provide feedback.",
          ],
        },
        {
          type: "subheading",
          text: "The Product Owner",
        },
        {
          type: "paragraph",
          text: "The PO is accountable for maximising the value of the product. They are NOT a proxy who just passes requests — they must be empowered to make real decisions about what to build and in what order.",
        },
        {
          type: "bullets",
          items: [
            "Maintains and orders the product backlog so the highest-value items are always ready to work.",
            "Writes (or collaborates on) user stories with clear acceptance criteria.",
            "Is available to the team daily to answer questions and clarify requirements.",
            "Accepts completed sprint work against agreed acceptance criteria.",
          ],
        },
        {
          type: "subheading",
          text: "The Scrum Master",
        },
        {
          type: "paragraph",
          text: "The Scrum Master is NOT a project manager. They do not assign work, track hours, or hold people accountable for deadlines. Their role is to make the team as effective as possible.",
        },
        {
          type: "table",
          table: {
            headers: ["Project Manager (Traditional)", "Scrum Master (Agile)"],
            rows: [
              ["Assigns tasks to individuals", "Team self-organises and pulls their own work"],
              ["Tracks individual performance", "Tracks team-level metrics and flow"],
              ["Reports status upward", "Coaches the team on agile practices"],
              ["Controls the project plan", "Removes impediments and protects the team"],
              ["Authority over the team", "Serves the team — no direct authority"],
            ],
          },
        },
        {
          type: "subheading",
          text: "Combat Groupthink",
        },
        {
          type: "paragraph",
          text: "Groupthink happens when teams stop challenging each other's ideas and converge on a comfortable consensus. It leads to poor decisions and unexamined assumptions.",
        },
        {
          type: "bullets",
          items: [
            "Assign a 'devil's advocate' role in discussions to formally challenge proposals.",
            "Use anonymous techniques so senior voices don't anchor the group.",
            "Psychological safety (Amy Edmondson): people must feel safe to speak up without fear of ridicule.",
            "Diverse teams — different backgrounds, disciplines, experiences — produce better decisions.",
          ],
        },
        {
          type: "subheading",
          text: "Planning Poker",
        },
        {
          type: "paragraph",
          text: "Planning Poker is a consensus-based estimation technique that uses cards with values from the Fibonacci sequence (1, 2, 3, 5, 8, 13, 21, ?) to estimate story complexity.",
        },
        {
          type: "numbered",
          items: [
            "The PO reads a user story aloud.",
            "Each team member privately selects a card representing their estimate.",
            "All cards are revealed simultaneously — preventing anchoring bias.",
            "If estimates differ widely, the highest and lowest estimators explain their reasoning.",
            "The team discusses and re-estimates until consensus is reached.",
          ],
        },
        {
          type: "note",
          text: "Why Fibonacci? The gaps between numbers grow as complexity grows, reflecting the increasing uncertainty of larger estimates. A story estimated at 8 is not twice as complex as a 4 — it's 'in a different class of uncertainty entirely.'",
        },
      ],
      keyPoints: [
        { label: "PO role", value: "Single empowered voice of the customer; backlog owner" },
        { label: "SM vs PM", value: "Scrum Master serves the team; Project Manager controls it" },
        { label: "Groupthink fix", value: "Simultaneous revelation, diverse teams, psychological safety" },
        { label: "Planning Poker", value: "Fibonacci-based anonymous estimation to prevent anchoring" },
      ],
    },
    {
      id: "ch8",
      number: "Chapter 8",
      title: "Start an Agile Transformation",
      summary:
        "Addresses the cultural and organisational challenges of adopting agile and provides a practical path for getting started.",
      content: [
        {
          type: "subheading",
          text: "Major Agile Challenges",
        },
        {
          type: "bullets",
          items: [
            "Organisational culture: companies built on control and predictability resist agile's trust-based, adaptive approach.",
            "Lack of executive buy-in: without senior sponsorship, teams revert to waterfall behaviours under pressure.",
            "Skill gaps: developers, managers, and POs may need significant coaching and practice.",
            "Tool mis-use: teams buy Jira or rally but use it to replicate waterfall — tracking tasks rather than managing flow.",
            "Partial adoption: doing Scrum ceremonies without the agile values ('Zombie Scrum').",
          ],
        },
        {
          type: "subheading",
          text: "Control Culture vs Trust Culture",
        },
        {
          type: "paragraph",
          text: "A control culture assumes workers need to be directed and monitored. A trust culture assumes skilled professionals will do their best work when given autonomy and clear goals. Agile fundamentally requires a shift toward trust.",
        },
        {
          type: "table",
          table: {
            headers: ["Control Culture", "Trust (Agile) Culture"],
            rows: [
              ["Managers decide how work is done", "Teams decide how to do their own work"],
              ["Status reports and meetings to monitor progress", "Working software and transparent boards show progress"],
              ["Failure is punished, risk is avoided", "Failure is a learning opportunity, experiments are encouraged"],
              ["Individuals are measured by hours worked", "Teams are measured by value delivered"],
            ],
          },
        },
        {
          type: "subheading",
          text: "How to Start an Agile Transformation",
        },
        {
          type: "numbered",
          items: [
            "Get executive sponsorship: transformation fails without support from the top. Find a senior champion.",
            "Start with a pilot team: choose a willing, capable team and give them room to experiment. Prove the value.",
            "Train and coach: invest in agile training for everyone, plus ongoing coaching from an experienced agile coach.",
            "Measure and share results: track delivery speed, quality, and team satisfaction. Share wins broadly.",
            "Expand gradually: once the pilot succeeds, replicate the model across other teams — don't mandate it top-down.",
            "Be patient: cultural transformation takes 1–3 years. Expect setbacks and celebrate small wins.",
          ],
        },
        {
          type: "note",
          text: "Agile transformations fail more often from cultural resistance than from lack of technical knowledge. Focus 80% of your energy on people and culture, 20% on process and tools.",
        },
      ],
      keyPoints: [
        { label: "Top blocker", value: "Culture — specifically, control cultures that resist trust-based working" },
        { label: "Starting point", value: "Pilot team + executive sponsor + skilled agile coach" },
        { label: "Timeline", value: "Meaningful cultural change takes 1–3 years — patience is essential" },
        { label: "Anti-pattern", value: "'Zombie Scrum' — doing the ceremonies without the values or mindset" },
      ],
    },
    {
      id: "conclusion-agile",
      number: "Conclusion",
      title: "Continuing with Agile",
      summary: "Wraps up the course and provides guidance on continuing your agile learning journey.",
      content: [
        {
          type: "paragraph",
          text: "Agile is not a destination — it is a journey of continuous improvement. The best agile teams never stop learning, experimenting, and adapting.",
        },
        {
          type: "subheading",
          text: "Next Steps",
        },
        {
          type: "bullets",
          items: [
            "Pursue certification: Certified ScrumMaster (CSM), Professional Scrum Master (PSM), or PMI-ACP.",
            "Read the classics: The Lean Startup (Ries), The Phoenix Project (Kim), Scrum (Sutherland), Extreme Programming Explained (Beck).",
            "Join a community: Agile Alliance, Scrum Alliance, local meetups.",
            "Practice retrospectives: the single most powerful habit you can build as an agile team.",
            "Focus on outcomes, not output: measure customer value delivered, not story points burned.",
          ],
        },
        {
          type: "note",
          text: "The goal is not to 'do agile' — it is to delight your customers by delivering the right product, at the right time, with the right quality.",
        },
      ],
    },
  ],
};

const scrumBasics: Course = {
  id: "scrum-basics",
  title: "Scrum: The Basics",
  subtitle: "LinkedIn Learning — Scrum: The Basics (4.8 ★, 20,523 reviews)",
  chapters: [
    {
      id: "scrum-ch1",
      number: "Chapter 1",
      title: "Problems to Solve",
      summary:
        "Sets the stage by examining why traditional project management fails for software and why Scrum has become the dominant approach.",
      content: [
        {
          type: "subheading",
          text: "Why Traditional Project Management Fails",
        },
        {
          type: "paragraph",
          text: "The Standish Group's CHAOS Report consistently finds that roughly 66% of software projects are challenged or fail outright. The root cause is almost always the same: trying to plan everything up front when you can't know everything up front.",
        },
        {
          type: "bullets",
          items: [
            "Requirements change as customers learn what they actually need.",
            "Technology choices made early often prove wrong mid-project.",
            "Defects discovered at the end of a long project are orders of magnitude more expensive to fix.",
            "Teams lose motivation on long projects with no visible progress or user feedback.",
          ],
        },
        {
          type: "subheading",
          text: "The Scrum Approach to Project Success",
        },
        {
          type: "paragraph",
          text: "Scrum applies empirical process control: make a prediction, take a small action, inspect the result, and adapt. This replaces the illusion of long-range predictability with rapid, evidence-based decision-making.",
        },
        {
          type: "table",
          table: {
            headers: ["Scrum Pillar", "What it means in practice"],
            rows: [
              ["Transparency", "All work is visible to all stakeholders — backlog, sprint board, burndown charts"],
              ["Inspection", "Regular, structured review of work and processes — sprint reviews and retrospectives"],
              ["Adaptation", "When inspection reveals problems, the team adjusts immediately rather than waiting"],
            ],
          },
        },
        {
          type: "subheading",
          text: "The Agile Revolution",
        },
        {
          type: "paragraph",
          text: "Agile methods emerged in the 1990s as a reaction to heavy, document-driven methodologies. The 2001 Agile Manifesto crystallised the shared values of these approaches. Scrum, developed by Ken Schwaber and Jeff Sutherland, became the most widely adopted framework.",
        },
        {
          type: "subheading",
          text: "Scrum: The Leading Project Methodology",
        },
        {
          type: "bullets",
          items: [
            "Used by approximately 70% of agile teams worldwide (State of Agile report).",
            "Applied across software, marketing, HR, education, government, and hardware development.",
            "Defined by the Scrum Guide (freely available at scrumguides.org) — kept deliberately lightweight.",
            "Scrum is a framework, not a prescriptive process: it defines roles, events, and artefacts but leaves implementation details to the team.",
          ],
        },
      ],
      keyPoints: [
        { label: "Failure rate", value: "~66% of software projects are challenged or fail (CHAOS Report)" },
        { label: "Root cause of failure", value: "Up-front planning assumptions that are invalidated by reality" },
        { label: "Scrum's answer", value: "Empirical process control: Transparency + Inspection + Adaptation" },
        { label: "Market share", value: "~70% of agile teams use Scrum" },
      ],
    },
    {
      id: "scrum-ch2",
      number: "Chapter 2",
      title: "The Heart of the Framework",
      summary:
        "Introduces Scrum's three roles, explains how they interact, and describes how to establish an effective Scrum team.",
      content: [
        {
          type: "subheading",
          text: "Scrum Is a Framework, Not a Methodology",
        },
        {
          type: "paragraph",
          text: "A methodology tells you exactly what to do. A framework gives you structure and leaves the details to you. Scrum intentionally leaves gaps — those gaps are where your team adds its own practices and expertise.",
        },
        {
          type: "subheading",
          text: "Solving Project Problems with Scrum",
        },
        {
          type: "bullets",
          items: [
            "Unclear requirements → User stories and regular backlog refinement keep requirements current and concrete.",
            "Missed deadlines → Timeboxed sprints make scope negotiable, not the date.",
            "Stakeholder misalignment → Sprint reviews pull stakeholders in at regular intervals to inspect and provide feedback.",
            "Team morale → Self-organisation, retrospectives, and visible progress improve engagement.",
          ],
        },
        {
          type: "subheading",
          text: "The Three Scrum Roles",
        },
        {
          type: "table",
          table: {
            headers: ["Role", "Accountability", "Key responsibilities"],
            rows: [
              [
                "Product Owner",
                "Maximise the value of the product",
                "Owns and orders the product backlog; writes acceptance criteria; accepts sprint output; single decision-maker on product scope",
              ],
              [
                "Scrum Master",
                "Maximise the effectiveness of the team",
                "Facilitates Scrum events; coaches team and organisation on Scrum; removes impediments; shields team from external interruptions",
              ],
              [
                "Developers",
                "Deliver a Done increment every sprint",
                "Self-organise to plan and execute sprint work; collaborate with PO daily; hold each other accountable to Definition of Done",
              ],
            ],
          },
        },
        {
          type: "subheading",
          text: "Establish Your Scrum Team",
        },
        {
          type: "bullets",
          items: [
            "Team size: 3–9 developers (plus PO and SM). Smaller teams move faster; larger teams need more coordination overhead.",
            "Cross-functional: the team collectively has all skills to design, build, test, and deploy — no external dependencies for normal work.",
            "Self-organising: the team decides how to do their work; management sets the goal, not the method.",
            "Dedicated: members are not split across multiple teams or projects — context switching is the enemy of flow.",
            "Stable: team composition should remain consistent across sprints to build trust and improve velocity predictability.",
          ],
        },
        {
          type: "note",
          text: "The 2-pizza rule (Jeff Bezos): a team is too big if you can't feed it with two pizzas. This maps roughly to 5–8 people — small enough for tight communication, big enough to have diverse skills.",
        },
      ],
      keyPoints: [
        { label: "Team size sweet spot", value: "3–9 developers + PO + SM (5–8 total is ideal)" },
        { label: "Self-organisation", value: "Team decides HOW; PO decides WHAT; neither dictates to the other" },
        { label: "Cross-functional rule", value: "No dependencies outside the team for normal sprint work" },
        { label: "Stability matters", value: "Team velocity improves as team members build trust and shared practices" },
      ],
    },
    {
      id: "scrum-ch3",
      number: "Chapter 3",
      title: "Getting Ready to Work",
      summary:
        "Covers the preparation work before a sprint begins: setting vision, writing user stories, estimating with story points, and creating a roadmap and release plan.",
      content: [
        {
          type: "subheading",
          text: "Set the Vision for Your Project",
        },
        {
          type: "paragraph",
          text: "A product vision answers: Who is this for? What problem does it solve? Why does it matter? It serves as the North Star that guides every backlog prioritisation decision.",
        },
        {
          type: "bullets",
          items: [
            "Keep it short — one or two sentences that any team member can recite from memory.",
            "Focus on customer outcomes, not product features.",
            "The vision should remain stable even as the backlog and priorities evolve.",
            "Example: 'Help busy professionals reclaim two hours per week by automating their expense reporting.'",
          ],
        },
        {
          type: "subheading",
          text: "Write User Stories",
        },
        {
          type: "paragraph",
          text: "User stories are short, customer-centric descriptions of a desired outcome. They are written in the format: 'As a [persona], I want [action], so that [benefit].'",
        },
        {
          type: "bullets",
          items: [
            "Each story includes Acceptance Criteria — a list of conditions that must be true for the story to be accepted.",
            "Stories are written by the PO, often in collaboration with the team and stakeholders.",
            "Epics are large stories that need to be split before they can be worked on in a sprint.",
            "A healthy backlog contains stories at multiple levels of readiness: detailed stories at the top (next 1–2 sprints), rougher epics further down.",
          ],
        },
        {
          type: "subheading",
          text: "Set Boundaries for Success",
        },
        {
          type: "bullets",
          items: [
            "Definition of Done (DoD): team-wide agreement on what 'done' means — prevents half-finished work accumulating.",
            "Team working agreements: norms for communication, code reviews, meeting etiquette, availability.",
            "Sprint goal: a one-sentence objective for each sprint that gives the team a shared focus beyond individual stories.",
          ],
        },
        {
          type: "subheading",
          text: "Story Points and Estimation in Scrum",
        },
        {
          type: "paragraph",
          text: "Story points are a relative, abstract measure of the complexity, effort, and uncertainty of a user story — not a time estimate.",
        },
        {
          type: "table",
          table: {
            headers: ["Story Point Value", "Typical meaning"],
            rows: [
              ["1", "Trivial — fully understood, minimal effort, no unknowns"],
              ["2", "Simple — well understood, small effort, low uncertainty"],
              ["3", "Small but slightly complex — a bit of thought needed"],
              ["5", "Medium — requires research or collaboration, some uncertainty"],
              ["8", "Complex — significant effort, multiple components, real risk"],
              ["13", "Very large — consider splitting into smaller stories"],
              ["21+", "Too big to estimate reliably — must be split before sprint planning"],
            ],
          },
        },
        {
          type: "bullets",
          items: [
            "Relative estimation: compare stories to each other and to a known reference story, not to clock time.",
            "Velocity: the average story points completed per sprint over the last 3–5 sprints. Used to forecast release dates.",
            "After 3–4 sprints, velocity stabilises and becomes a reliable planning tool.",
          ],
        },
        {
          type: "subheading",
          text: "Create a Roadmap and Release Plan",
        },
        {
          type: "paragraph",
          text: "A roadmap shows high-level themes or milestones by quarter. A release plan breaks those themes into specific sprints, using velocity to forecast what will be delivered when.",
        },
        {
          type: "note",
          text: "Release plans are forecasts, not commitments. They should be updated after every sprint based on actual velocity and changing priorities.",
        },
      ],
      keyPoints: [
        { label: "Vision purpose", value: "Aligns every prioritisation decision to customer outcomes" },
        { label: "Story points", value: "Relative complexity estimates — not hours. Resistance to time-boxing." },
        { label: "Velocity", value: "Stabilises after 3–4 sprints; used to forecast release dates" },
        { label: "Release plan", value: "A forecast built from velocity — update it every sprint" },
      ],
    },
    {
      id: "scrum-ch4",
      number: "Chapter 4",
      title: "Getting Down to Work",
      summary:
        "Describes the day-to-day ceremonies and practices of a running sprint: planning, standups, tracking progress, and refining the backlog.",
      content: [
        {
          type: "subheading",
          text: "Sprint Planning in Scrum",
        },
        {
          type: "paragraph",
          text: "Sprint Planning is the kick-off ceremony for every sprint. For a two-week sprint, it typically lasts 2–4 hours.",
        },
        {
          type: "table",
          table: {
            headers: ["Part", "What happens", "Output"],
            rows: [
              ["Part 1 — What", "PO presents top backlog stories; team asks clarifying questions; team selects stories for the sprint", "Sprint backlog: the set of stories the team will work on"],
              ["Part 2 — How", "Team breaks selected stories into tasks; estimates tasks; identifies dependencies and risks", "Sprint goal: one sentence describing the purpose of this sprint"],
            ],
          },
        },
        {
          type: "bullets",
          items: [
            "The team pulls work into the sprint — nobody assigns it. The team commits to the sprint goal, not to individual stories.",
            "Capacity planning: account for holidays, meetings, and other known interruptions before calculating sprint capacity.",
            "Under-commit rather than over-commit, especially in early sprints — it builds trust and preserves space for quality.",
          ],
        },
        {
          type: "subheading",
          text: "Track Your Scrum Progress",
        },
        {
          type: "paragraph",
          text: "The Sprint Burndown Chart plots remaining work (story points or tasks) on the Y-axis against sprint days on the X-axis. A healthy burndown trends steadily downward toward zero by the end of the sprint.",
        },
        {
          type: "bullets",
          items: [
            "A flat or upward trend early in the sprint signals that the team is blocked or has underestimated the work.",
            "A cliff drop at the end of the sprint (all work done in the last two days) suggests the team isn't updating the board daily.",
            "Velocity chart: tracks story points completed per sprint over time — useful for release forecasting.",
          ],
        },
        {
          type: "subheading",
          text: "The Daily Scrum (Standup)",
        },
        {
          type: "paragraph",
          text: "A 15-minute daily meeting for the development team. The Scrum Master facilitates; the PO attends but typically doesn't speak unless invited.",
        },
        {
          type: "table",
          table: {
            headers: ["Classic Question", "Better framing"],
            rows: [
              ["What did I do yesterday?", "What did I complete toward the sprint goal?"],
              ["What will I do today?", "What will I start or continue to advance the sprint goal?"],
              ["Any impediments?", "Is anything blocking me or the team from reaching the sprint goal?"],
            ],
          },
        },
        {
          type: "bullets",
          items: [
            "This is NOT a status report for management — it is a planning and synchronisation meeting for the team.",
            "Detailed problem-solving happens AFTER the standup, in a separate 'parking lot' conversation with relevant people.",
            "Standing up keeps the meeting short and discourages lengthy monologues.",
          ],
        },
        {
          type: "subheading",
          text: "Backlog Refinement in Scrum",
        },
        {
          type: "paragraph",
          text: "Backlog refinement (formerly 'grooming') is an ongoing activity — typically 1–2 hours per week — where the team prepares upcoming stories for future sprints.",
        },
        {
          type: "bullets",
          items: [
            "The PO presents upcoming stories; the team asks questions, identifies unknowns, and writes acceptance criteria.",
            "Stories are estimated (via Planning Poker or similar) so they're ready for sprint planning.",
            "Large stories are split into smaller, sprint-sized pieces.",
            "Goal: the top 2–3 sprints' worth of backlog should always be refined and estimated.",
          ],
        },
        {
          type: "note",
          text: "Refinement is not a Scrum event (it's not in the Scrum Guide as a mandatory ceremony), but high-performing teams treat it as essential. Without it, sprint planning becomes chaotic and estimation quality suffers.",
        },
      ],
      keyPoints: [
        { label: "Sprint Planning duration", value: "~2 hours per week of sprint length (e.g. 4 hrs for 2-week sprint)" },
        { label: "Burndown purpose", value: "Show remaining work vs remaining time — spot problems early" },
        { label: "Standup rule", value: "15 minutes max; team-for-team, not team-for-management" },
        { label: "Refinement goal", value: "Keep the top 2–3 sprints' worth of backlog ready at all times" },
      ],
    },
    {
      id: "scrum-ch5",
      number: "Chapter 5",
      title: "Wrapping Up a Sprint",
      summary:
        "Covers the three closing ceremonies of every sprint: ensuring stories are done, demonstrating work to stakeholders, and running a productive retrospective.",
      content: [
        {
          type: "subheading",
          text: "Get Stories Done in Scrum",
        },
        {
          type: "paragraph",
          text: "The Definition of Done is the team's shared agreement on the quality gate a story must pass before it can be counted as complete. Without a clear DoD, 'done' becomes subjective and technical debt accumulates silently.",
        },
        {
          type: "bullets",
          items: [
            "A strong DoD typically includes: code written and reviewed, all tests pass, integration tests pass, deployed to staging, acceptance criteria verified, documentation updated.",
            "The DoD is a living document — the team strengthens it over time as their standards improve.",
            "Stories that don't meet the DoD at sprint end are NOT counted in velocity — they return to the backlog.",
            "A consistent DoD prevents the gradual accumulation of 'almost done' work that obscures the true state of the product.",
          ],
        },
        {
          type: "subheading",
          text: "Demo the Team's Work (Sprint Review)",
        },
        {
          type: "paragraph",
          text: "The Sprint Review is an informal demonstration of the sprint's completed work to stakeholders. It is an inspection-and-adaptation event — not a status meeting or approval gate.",
        },
        {
          type: "bullets",
          items: [
            "The team demonstrates only stories that meet the Definition of Done — no partial credit.",
            "Stakeholders provide feedback that feeds directly into the backlog for upcoming sprints.",
            "The PO reviews and accepts (or rejects) completed work.",
            "Duration: typically 1 hour for a 2-week sprint. Keep it focused and interactive.",
            "The goal is learning and alignment, not congratulation. Honest feedback is more valuable than applause.",
          ],
        },
        {
          type: "subheading",
          text: "Assess the Team (Sprint Retrospective)",
        },
        {
          type: "paragraph",
          text: "The Retrospective is the team's opportunity to inspect their own process and agree on improvements for the next sprint. It is the most powerful continuous-improvement practice in Scrum.",
        },
        {
          type: "table",
          table: {
            headers: ["Retrospective Format", "Questions asked"],
            rows: [
              ["Start / Stop / Continue", "What should we start doing? What should we stop doing? What should we continue doing?"],
              ["4 Ls", "What did we Love? What did we Loathe? What did we Learn? What do we Long for?"],
              ["Mad / Sad / Glad", "What made us mad? What made us sad? What made us glad?"],
              ["Sailboat", "Wind (what's pushing us forward)? Anchor (what's slowing us down)? Rocks (risks ahead)?"],
            ],
          },
        },
        {
          type: "bullets",
          items: [
            "Duration: typically 45–90 minutes for a 2-week sprint.",
            "The Scrum Master facilitates and ensures psychological safety — people must feel safe to raise problems.",
            "Every retro should produce 1–3 concrete action items owned by specific team members for the next sprint.",
            "Follow up: at the next retro, check whether previous action items were actually completed.",
          ],
        },
        {
          type: "note",
          text: "The retrospective is NOT optional. Teams that skip retros lose their primary mechanism for improving. A team that never improves its process will plateau and eventually decline.",
        },
      ],
      keyPoints: [
        { label: "DoD importance", value: "Prevents 'almost done' work accumulating as hidden debt" },
        { label: "Sprint Review purpose", value: "Inspect the INCREMENT (product) with stakeholders and adapt the backlog" },
        { label: "Retro purpose", value: "Inspect the PROCESS with the team and adapt working practices" },
        { label: "Retro output", value: "1–3 specific, owned action items for the next sprint" },
      ],
    },
    {
      id: "scrum-conclusion",
      number: "Conclusion",
      title: "Deliver Successful Projects Using Scrum",
      summary: "Closes the course with a synthesis of Scrum's core lessons and a path forward.",
      content: [
        {
          type: "paragraph",
          text: "Scrum is deceptively simple: three roles, five events, three artefacts. The difficulty is not understanding it — it is doing it well consistently, under pressure, in an organisation that may not yet fully support it.",
        },
        {
          type: "subheading",
          text: "The Full Scrum Cycle",
        },
        {
          type: "table",
          table: {
            headers: ["Event", "Purpose", "Duration (2-week sprint)"],
            rows: [
              ["Sprint Planning", "Select and plan sprint work", "4 hours"],
              ["Daily Scrum", "Synchronise and identify blockers", "15 minutes × 10 days"],
              ["Sprint Review", "Demo increment to stakeholders; inspect product", "2 hours"],
              ["Sprint Retrospective", "Inspect process; agree improvements", "1.5 hours"],
              ["Backlog Refinement", "Prepare upcoming stories for future sprints", "~2 hours/week (ongoing)"],
            ],
          },
        },
        {
          type: "subheading",
          text: "Keys to Scrum Success",
        },
        {
          type: "bullets",
          items: [
            "A real, empowered Product Owner who makes decisions — not a proxy who escalates everything.",
            "A skilled Scrum Master who coaches the team on process and actively removes impediments.",
            "A stable, cross-functional, self-organising team with psychological safety.",
            "Consistent use of the Definition of Done to ensure quality never slips.",
            "Genuine retrospectives that result in real changes — not just conversations.",
            "Stakeholder engagement at Sprint Reviews — feedback is the fuel for the Scrum engine.",
          ],
        },
        {
          type: "note",
          text: "Scrum will expose your organisation's dysfunction faster than any other framework. That's not a bug — it's the feature. The problems were always there; Scrum makes them visible so you can fix them.",
        },
      ],
    },
  ],
};

const jiraCloud: Course = {
  id: "jira-cloud",
  title: "Jira Cloud: Projects, Boards, and Issues",
  subtitle: "LinkedIn Learning — Agile Project Management with Jira Cloud: 1 (4.7 ★, 6,988 reviews)",
  chapters: [
    {
      id: "jira-overview",
      number: "Overview",
      title: "Course Overview",
      summary: "Introduces Jira Cloud, the Atlassian product family, deployment options, and the two project types you will use throughout the course.",
      content: [
        {
          type: "subheading",
          text: "The Atlassian Product Family",
        },
        {
          type: "table",
          table: {
            headers: ["Product", "Purpose", "How it connects to Jira"],
            rows: [
              ["Jira Software", "Agile project management — Scrum and Kanban boards, backlogs, sprints", "Core tool in this course"],
              ["Jira Service Management", "IT service desk — incident management, SLAs, customer portals", "Shares issues and users with Jira Software"],
              ["Confluence", "Team wiki and documentation", "Link Confluence pages directly to Jira issues; retrospective templates"],
              ["Bitbucket", "Git code hosting", "Link commits, branches, and PRs to Jira issues automatically"],
              ["Trello", "Simple Kanban boards", "Lightweight alternative for very small teams; connects to Jira"],
            ],
          },
        },
        {
          type: "subheading",
          text: "Jira Cloud vs Server vs Data Center",
        },
        {
          type: "table",
          table: {
            headers: ["Deployment", "Hosted by", "Best for"],
            rows: [
              ["Jira Cloud", "Atlassian (SaaS)", "Most teams — always up to date, no maintenance, accessible anywhere"],
              ["Jira Data Center", "Your own servers/cloud", "Large enterprises needing data sovereignty or custom security policies"],
              ["Jira Server", "Your own servers (EOL Feb 2024)", "Legacy — Atlassian has ended support; migrate to Cloud or DC"],
            ],
          },
        },
        {
          type: "subheading",
          text: "Two Project Types in Jira Cloud",
        },
        {
          type: "table",
          table: {
            headers: ["Project Type", "Best for", "Key characteristic"],
            rows: [
              ["Company-managed (Classic)", "Organisations needing shared configuration across projects", "Admins control workflows, schemes, and fields centrally — changes affect all projects using that scheme"],
              ["Team-managed (Next-gen)", "Teams wanting fast, independent setup", "Each team configures their own project — no admin needed, no shared schemes"],
            ],
            note: "Both types support Scrum and Kanban boards. The labs in this course walk through both so you can compare them side by side.",
          },
        },
        {
          type: "subheading",
          text: "Core Jira Concepts",
        },
        {
          type: "table",
          table: {
            headers: ["Concept", "What it is", "Where you find it"],
            rows: [
              ["Project", "Container for all work on a product or by a team", "Left sidebar → Projects"],
              ["Issue", "Any unit of work: Epic, Story, Task, Bug, Sub-task", "Everywhere — boards, backlogs, search results"],
              ["Board", "Visual columns interface for tracking issue progress", "Left sidebar → Board"],
              ["Backlog", "Ordered list of all issues not yet in an active sprint", "Left sidebar → Backlog"],
              ["Sprint", "Fixed-length iteration (Scrum projects only)", "Created in Backlog; shown on Board"],
              ["Epic", "Large theme grouping multiple stories and tasks", "Backlog epics panel; Roadmap view"],
              ["Workflow", "The set of statuses an issue moves through", "Project Settings → Workflows"],
            ],
          },
        },
      ],
    },
    {
      id: "jira-ch1",
      number: "Chapter 1",
      title: "Agile and Jira",
      summary: "Explains how Jira maps to agile concepts, the difference between company-managed and team-managed projects, how to create a project, and how to navigate the Jira interface.",
      content: [
        {
          type: "subheading",
          text: "What is Jira?",
        },
        {
          type: "paragraph",
          text: "Jira is a project management and issue tracking tool built by Atlassian. Originally designed for bug tracking in 2002, it has evolved into the most widely used agile project management platform, supporting Scrum, Kanban, and hybrid workflows.",
        },
        {
          type: "bullets",
          items: [
            "Used by over 65,000 companies worldwide — from 5-person startups to Fortune 500 engineering organisations.",
            "Jira Cloud is the SaaS version: no installation, always on the latest version, accessible from any browser or mobile app.",
            "Connects natively to Confluence (docs), Bitbucket (code), and hundreds of marketplace apps.",
            "Highly configurable: workflows, fields, permissions, screens, and notifications can all be customised to fit your team's process.",
          ],
        },
        {
          type: "subheading",
          text: "How Jira Supports Agile",
        },
        {
          type: "table",
          table: {
            headers: ["Agile concept", "Jira implementation", "Where to find it"],
            rows: [
              ["Product Backlog", "Project backlog — ordered list of issues prioritised by the PO", "Left sidebar → Backlog"],
              ["Sprint", "Jira Sprint — time-boxed iteration with start/end dates and a sprint goal", "Backlog → Create sprint"],
              ["Sprint Board", "Scrum board — columns map to workflow statuses", "Left sidebar → Board"],
              ["Kanban Board", "Kanban board — continuous flow with optional WIP limits", "Left sidebar → Board (Kanban project)"],
              ["User Story", "Story issue type — summary, description, acceptance criteria, story points", "Create issue → select Story"],
              ["Daily Standup", "Team uses the board to review In Progress cards and blockers", "Board view during the standup"],
              ["Burndown Chart", "Sprint report — remaining story points vs remaining days", "Board → Reports → Burndown Chart"],
              ["Velocity Chart", "Average story points completed per sprint over time", "Board → Reports → Velocity Chart"],
              ["Retrospective", "No native Jira feature — use Confluence or tools like EasyRetro", "External tool; link results in Confluence"],
            ],
          },
        },
        {
          type: "subheading",
          text: "Creating a Project in Jira Cloud",
        },
        {
          type: "ui-hint",
          text: "Top navigation → click 'Projects' → 'Create project' → choose a template (Scrum or Kanban) → choose Company-managed or Team-managed → enter project name and key (e.g. SP for 'Scrum Practice') → click Create.",
        },
        {
          type: "bullets",
          items: [
            "Project key: a short prefix (2–10 letters) automatically prepended to all issue numbers in the project (e.g. SP-1, SP-2). Choose something meaningful and short.",
            "Project lead: the default assignee for issues with no assignee. Usually the PO or a team lead.",
            "You can change the project name, key, and lead later in Project Settings → Details.",
          ],
        },
        {
          type: "subheading",
          text: "Company-Managed vs Team-Managed — Deep Dive",
        },
        {
          type: "table",
          table: {
            headers: ["Feature", "Company-Managed", "Team-Managed"],
            rows: [
              ["Who sets it up?", "Jira admin required for full config", "Any team member — no admin needed"],
              ["Workflow customisation", "Full control: add statuses, transitions, conditions, validators", "Simple presets only; column name = status"],
              ["Fields and screens", "Admin configures which fields appear on create/edit/view screens", "All fields visible by default; no screen config"],
              ["Permissions", "Granular permission schemes: who can create, edit, delete, transition", "Simplified: Admin / Member / Viewer roles"],
              ["Shared schemes", "Workflows, fields, and permissions shared across multiple projects", "Everything is per-project; no sharing"],
              ["Reports", "Full suite: Burndown, Velocity, Sprint Report, Epic Report, Version Report, Cumulative Flow", "Burndown and Velocity only"],
              ["Roadmap", "Yes — timeline view of epics across sprints", "Basic roadmap (limited features)"],
              ["Best for", "Established teams in larger organisations needing consistency", "New teams, experiments, or standalone projects"],
            ],
          },
        },
        {
          type: "subheading",
          text: "Jira Roles",
        },
        {
          type: "table",
          table: {
            headers: ["Role", "What they can do"],
            rows: [
              ["Jira Administrator", "Configure all project settings, workflows, fields, permissions, and user management at the site level"],
              ["Project Administrator", "Configure settings for their specific project only — boards, components, versions"],
              ["Project Member (Developer)", "Create, edit, transition, and comment on issues; manage their own work"],
              ["Project Viewer", "Read-only access — can view issues and boards but not create or edit"],
            ],
          },
        },
        {
          type: "subheading",
          text: "Navigating Jira Cloud",
        },
        {
          type: "bullets",
          items: [
            "Left sidebar: project-specific navigation — Board, Backlog, Reports, Releases, Project Settings.",
            "Top navigation bar: global search ('/' shortcut), create issue button, notifications bell, help, and profile.",
            "Project home: shows recent activity, your assigned issues, and quick links.",
            "Issue detail panel: click any issue to open a side panel — or click the issue key to open the full-page view.",
            "Keyboard shortcuts: press '?' on any Jira page to see all shortcuts. Key ones: 'c' = create issue, 'g then b' = go to board, 'g then d' = go to dashboard.",
          ],
        },
      ],
      keyPoints: [
        { label: "Jira purpose", value: "Agile project management and issue tracking — Scrum and Kanban natively supported" },
        { label: "Project key", value: "Short prefix (e.g. SP) auto-prepended to all issue numbers in the project" },
        { label: "Two project types", value: "Company-managed = admin-controlled, shared config; Team-managed = self-serve, per-project" },
        { label: "Shortcut", value: "Press '?' anywhere in Jira to see all keyboard shortcuts" },
        { label: "Key decision", value: "Choose project type based on team size, need for admin control, and cross-project consistency" },
      ],
    },
    {
      id: "jira-ch2",
      number: "Chapter 2",
      title: "Project Boards",
      summary: "Deep-dives into using, navigating, and configuring Scrum and Kanban boards in both company-managed and team-managed Jira projects — including backlog management, sprint workflow, and board customisation.",
      content: [
        {
          type: "subheading",
          text: "What is a Project Board?",
        },
        {
          type: "paragraph",
          text: "A board is the primary visual interface for managing work in Jira. Issues appear as cards arranged in columns representing workflow stages. Dragging a card to a new column transitions its status automatically — no need to open the issue.",
        },
        {
          type: "subheading",
          text: "The Scrum Board — Full Walkthrough",
        },
        {
          type: "bullets",
          items: [
            "Board view: shows only issues in the active sprint, grouped into status columns (To Do / In Progress / Done by default).",
            "Backlog view: shows all issues NOT in an active sprint — this is where you groom stories, create epics, and plan sprints.",
            "Sprint header: shows the sprint name, goal, start/end dates, and remaining days at the top of the board.",
            "Issue cards: show summary, assignee avatar, issue type icon, priority flag, and story point estimate at a glance.",
            "Epic colour bands: each epic gets a colour; issue cards show a coloured band on the left so you can see which epic they belong to.",
          ],
        },
        {
          type: "subheading",
          text: "Managing the Backlog",
        },
        {
          type: "ui-hint",
          text: "Left sidebar → Backlog. Issues at the top are highest priority. Drag to reorder. The Epics panel on the left lets you filter the backlog by epic. The Versions panel shows fix versions. Click any issue to edit it inline.",
        },
        {
          type: "bullets",
          items: [
            "Ranking: drag issues up or down in the backlog to reorder priority. The PO owns this ordering.",
            "Bulk selection: hold Shift and click multiple issues to bulk-assign, bulk-move to sprint, or bulk-transition.",
            "Inline editing: click the story points field on a backlog issue to edit it without opening the issue.",
            "Epic panel: click an epic in the left panel to filter the backlog to only show issues in that epic.",
            "Versions panel: group issues by release version. Useful for release planning.",
          ],
        },
        {
          type: "subheading",
          text: "Sprint Lifecycle in Jira",
        },
        {
          type: "table",
          table: {
            headers: ["Step", "Action in Jira", "Where"],
            rows: [
              ["1. Create sprint", "Click 'Create sprint' button above the backlog", "Backlog view"],
              ["2. Add issues", "Drag issues from backlog into the sprint container", "Backlog view"],
              ["3. Set sprint details", "Right-click sprint header → Edit sprint → add name, goal, start/end dates", "Backlog view"],
              ["4. Start sprint", "Click 'Start sprint' button on the sprint container", "Backlog view"],
              ["5. Work the sprint", "Team moves cards across columns; daily standup against the board", "Board view"],
              ["6. Complete sprint", "Click 'Complete sprint' → choose where incomplete issues go", "Board view"],
            ],
          },
        },
        {
          type: "subheading",
          text: "Swimlanes",
        },
        {
          type: "paragraph",
          text: "Swimlanes divide the board into horizontal rows to group issues visually. Available in company-managed projects.",
        },
        {
          type: "table",
          table: {
            headers: ["Swimlane type", "Groups issues by"],
            rows: [
              ["Epics", "Each epic gets its own row — great for seeing progress per epic at a glance"],
              ["Assignee", "Each team member gets a row — shows individual workload"],
              ["Stories", "Parent stories at the top; sub-tasks grouped under their parent"],
              ["JQL query", "Custom groupings — e.g. 'High priority' lane and 'Everything else' lane"],
            ],
          },
        },
        {
          type: "subheading",
          text: "The Kanban Board",
        },
        {
          type: "bullets",
          items: [
            "No sprints — issues flow continuously from the backlog (or directly) onto the board.",
            "WIP limits: set a max number of issues per column. The column header turns red when exceeded.",
            "Sub-filter: filter the board by assignee, label, or epic without affecting the underlying data.",
            "Backlog (optional): enable a separate backlog view in board settings so unstarted issues don't clutter the board.",
            "Expedite lane: a special swimlane for urgent issues that bypass WIP limits — use sparingly.",
          ],
        },
        {
          type: "subheading",
          text: "Board Configuration (Company-Managed)",
        },
        {
          type: "ui-hint",
          text: "Board view → click '…' (three dots, top right) → Board settings. This opens the full board configuration menu with tabs for Columns, Swimlanes, Quick Filters, Card Colours, Card Layout, and Working Days.",
        },
        {
          type: "table",
          table: {
            headers: ["Setting", "What you configure", "Tip"],
            rows: [
              ["Columns", "Map workflow statuses to columns; add, rename, reorder columns", "Add a 'In Review' column between In Progress and Done for code review visibility"],
              ["WIP limits", "Min and max issues per column (Kanban boards)", "Start with team size as your In Progress WIP limit"],
              ["Swimlanes", "Row grouping: epic, assignee, priority, or JQL", "Epics swimlane is the most useful for POs tracking progress"],
              ["Quick filters", "Preset filter buttons above the board (e.g. 'My Issues', 'Blockers')", "Add 'Blockers' filter: JQL = issueFunction in linkedIssues('blocks')"],
              ["Card layout", "Choose extra fields shown on cards: e.g. fix version, due date", "Add Due Date to cards for time-sensitive projects"],
              ["Card colours", "Colour-code cards by priority, issue type, or JQL", "Red for Highest priority makes blockers immediately visible"],
              ["Working days", "Exclude weekends/holidays from burndown calculations", "Always configure this — default includes weekends and skews the chart"],
            ],
          },
        },
        {
          type: "subheading",
          text: "Board Configuration (Team-Managed)",
        },
        {
          type: "ui-hint",
          text: "Board view → click '+' at the right end of the columns to add a new column. Click a column name to rename it. Drag columns to reorder. Click the column's WIP limit field to set a limit (Kanban projects).",
        },
        {
          type: "bullets",
          items: [
            "Column name = status name — renaming a column renames the status everywhere in the project.",
            "No swimlanes or advanced card layout options in team-managed projects.",
            "WIP limits are available on Kanban boards but not Scrum boards in team-managed.",
            "Board settings (gear icon) let you enable/disable the backlog and change the sprint duration default.",
          ],
        },
        {
          type: "note",
          text: "The board is a view — it doesn't store data independently. Changing a card's column simply triggers a workflow transition on the underlying issue. One issue can appear on multiple boards if those boards share the same project.",
        },
      ],
      keyPoints: [
        { label: "Scrum board", value: "Shows active sprint only — pull from backlog, track through sprint, complete at sprint end" },
        { label: "Kanban board", value: "Continuous flow — WIP limits per column prevent bottlenecks; no sprint cadence" },
        { label: "Backlog vs board", value: "Backlog = all future work + sprint planning; Board = active sprint execution" },
        { label: "Swimlanes", value: "Horizontal rows grouping issues by epic, assignee, priority, or custom JQL" },
        { label: "Working days config", value: "Always set non-working days in board settings or your burndown chart will be inaccurate" },
      ],
    },
    {
      id: "jira-ch3",
      number: "Chapter 3",
      title: "Enrich Issues",
      summary: "Comprehensive guide to creating and enriching Jira issues — covering all issue types, fields, epics, linking, attachments, comments, workflows, and best practices for both project types.",
      content: [
        {
          type: "subheading",
          text: "Creating an Issue",
        },
        {
          type: "ui-hint",
          text: "Press 'c' (keyboard shortcut) or click the '+ Create' button in the top navigation → select project and issue type → fill in at minimum the Summary → click Create. For a detailed view, click 'Create another' to stay on the form, or open the issue afterwards to add more fields.",
        },
        {
          type: "subheading",
          text: "Issue Type Hierarchy",
        },
        {
          type: "table",
          table: {
            headers: ["Issue Type", "Icon colour", "Purpose", "Typical size"],
            rows: [
              ["Epic", "Purple", "Large theme spanning multiple sprints; groups related stories and tasks", "Weeks to months"],
              ["Story", "Green", "User-facing feature described from the user's perspective; main sprint work unit", "1–3 days"],
              ["Task", "Blue", "Technical or operational work not directly tied to a user story", "Hours to days"],
              ["Sub-task", "Blue (small)", "Specific piece of a parent story or task; assigned to one person", "Hours"],
              ["Bug", "Red", "Defect in existing functionality; requires steps to reproduce + expected vs actual", "Varies"],
            ],
          },
        },
        {
          type: "subheading",
          text: "All Key Issue Fields",
        },
        {
          type: "table",
          table: {
            headers: ["Field", "Purpose", "Best practice"],
            rows: [
              ["Summary", "One-line title visible everywhere", "Write as an action/outcome: 'Add export to CSV on reports page'"],
              ["Description", "Full context, acceptance criteria, design links", "Use the template: Context / Acceptance Criteria / Notes"],
              ["Issue Type", "Epic / Story / Task / Bug / Sub-task", "Choose carefully — affects available fields and board display"],
              ["Status", "Current workflow stage (To Do / In Progress / Done)", "Updated by moving the card on the board"],
              ["Assignee", "Person responsible for completing the issue", "One assignee only — use sub-tasks for parallel work"],
              ["Reporter", "Person who created or raised the issue", "Auto-filled; change it if raising on someone else's behalf"],
              ["Priority", "Highest / High / Medium / Low / Lowest", "Reserve Highest for genuine blockers; don't mark everything High"],
              ["Labels", "Free-text cross-project tags", "Agree team-wide label taxonomy to keep them useful"],
              ["Components", "Named sub-sections of the project (company-managed only)", "Examples: Frontend, Backend, API, iOS, Android"],
              ["Story Points", "Relative complexity estimate (Fibonacci)", "Estimate as a team — use Planning Poker"],
              ["Sprint", "Which sprint the issue is assigned to", "Set during Sprint Planning; visible in backlog and board"],
              ["Epic Link", "Which epic this issue belongs to", "Always set for stories — orphaned stories are hard to track"],
              ["Fix Version", "Which release this issue targets", "Useful for release planning and version reports"],
              ["Due Date", "Target completion date", "Use sparingly — sprint end date is usually your boundary"],
              ["Linked Issues", "Relationship to other issues", "Blocks / Is blocked by / Relates to / Duplicates / Clones"],
              ["Attachments", "Files, screenshots, designs", "Drag-and-drop directly onto the issue detail page"],
              ["Comments", "Discussion and updates on the issue", "@ mention teammates; they get notified automatically"],
            ],
          },
        },
        {
          type: "subheading",
          text: "Epics — Full Guide",
        },
        {
          type: "paragraph",
          text: "Epics are the primary way to organise and track a large body of related work across multiple sprints.",
        },
        {
          type: "ui-hint",
          text: "To create an epic: Backlog → Epics panel (left side) → '+ Create epic'. Give it a name and colour. To link a story to an epic: open the story → set the 'Epic Link' field. Or drag the story onto the epic in the backlog's Epic panel.",
        },
        {
          type: "bullets",
          items: [
            "Epic colour: each epic gets a colour; child issues show a coloured band on their card in the board and backlog.",
            "Epic progress: the epic detail shows a progress bar — Done / In Progress / To Do issue counts at a glance.",
            "Roadmap (company-managed): see all epics on a horizontal timeline. Drag epic bars to adjust dates. View → Roadmap in the project sidebar.",
            "Epic Report: shows issues completed vs remaining for a single epic over time. Board → Reports → Epic Report.",
            "Filtering by epic: in the backlog, click an epic in the left panel to filter issues to that epic only.",
          ],
        },
        {
          type: "subheading",
          text: "Issue Linking",
        },
        {
          type: "table",
          table: {
            headers: ["Link type", "Meaning", "When to use"],
            rows: [
              ["Blocks / Is blocked by", "Issue A cannot be completed until Issue B is done", "Dependency between stories or teams"],
              ["Relates to", "Issues are connected but neither blocks the other", "Related features or shared context"],
              ["Duplicates / Is duplicated by", "Two issues describe the same problem or feature", "Close the duplicate; keep the original"],
              ["Clones / Is cloned by", "One issue was copied from another", "Tracking template issues or repeated work"],
            ],
          },
        },
        {
          type: "subheading",
          text: "Workflow and Transitions",
        },
        {
          type: "paragraph",
          text: "A workflow defines the statuses an issue can be in and the transitions between them. In company-managed projects, admins can fully customise workflows. In team-managed projects, column names are the statuses.",
        },
        {
          type: "bullets",
          items: [
            "Transition: moving an issue from one status to another. Triggered by dragging a card on the board or clicking 'In Progress' / 'Done' on the issue detail page.",
            "Transition conditions: company-managed only — you can require certain fields to be filled before an issue can be transitioned (e.g. must have assignee before moving to In Progress).",
            "Global transitions: some transitions are available from any status (e.g. 'Reopen' from Done back to To Do).",
            "Post-functions: automatic actions that happen when a transition fires — e.g. auto-assign the issue or send an email.",
          ],
        },
        {
          type: "subheading",
          text: "Company-Managed vs Team-Managed Fields",
        },
        {
          type: "table",
          table: {
            headers: ["Field / Feature", "Company-Managed", "Team-Managed"],
            rows: [
              ["Components", "Yes — admin defines component list", "No"],
              ["Story Points field name", "'Story Points' on Story and Bug", "'Story point estimate' on all issue types"],
              ["Custom fields", "Admin can add text, number, date, dropdown, user fields", "No custom fields — predefined only"],
              ["Screens", "Admin controls fields shown on Create / Edit / View screens", "All fields always visible; no screen config"],
              ["Workflows", "Fully custom — any number of statuses and transitions", "Preset only: To Do → In Progress → Done"],
              ["Issue types", "Admin can add custom issue types", "Fixed set only"],
            ],
          },
        },
        {
          type: "note",
          text: "The purpose of enriching issues is to give any team member — including someone picking it up for the first time — enough context to start work immediately without asking clarifying questions. Every blank field is a potential delay.",
        },
      ],
      keyPoints: [
        { label: "Issue hierarchy", value: "Epic → Story / Task / Bug → Sub-task (three levels)" },
        { label: "Shortcut", value: "Press 'c' anywhere in Jira to open the Create Issue dialog" },
        { label: "Components vs labels", value: "Components = structured project sub-sections (admin-defined); Labels = free-form cross-project tags" },
        { label: "Epic Link", value: "Always set the Epic Link on stories — orphaned stories are invisible on the roadmap and epic reports" },
        { label: "Linking issues", value: "Use 'blocks / is blocked by' to make dependencies explicit and searchable in JQL" },
        { label: "Transitions", value: "Moving a card on the board = transitioning the issue's workflow status" },
      ],
    },
    {
      id: "jira-ch4",
      number: "Chapter 4",
      title: "Kanban Method",
      summary: "Complete guide to implementing the Kanban method in Jira Cloud — setting up boards, configuring WIP limits, reading Kanban metrics, and deciding when Kanban is the right choice.",
      content: [
        {
          type: "subheading",
          text: "The Five Core Kanban Practices",
        },
        {
          type: "table",
          table: {
            headers: ["Practice", "What it means", "How Jira implements it"],
            rows: [
              ["Visualise work", "Make all work and its status visible to the whole team", "Kanban board: every issue is a card; every stage is a column; all team members see the same view"],
              ["Limit WIP", "Cap the number of items in progress at any time to prevent overload", "Per-column WIP limits; column header turns red when exceeded"],
              ["Manage flow", "Actively monitor and improve how work moves through the system", "Cumulative Flow Diagram and Control Chart in board reports"],
              ["Make policies explicit", "Document the rules for how work moves between stages", "Column definitions; WIP limit values visible to all"],
              ["Improve collaboratively", "Use data and team retrospectives to improve the process continuously", "Control Chart shows cycle time outliers; CFD shows systemic problems"],
            ],
          },
        },
        {
          type: "subheading",
          text: "Setting Up a Kanban Project in Jira",
        },
        {
          type: "ui-hint",
          text: "Projects → Create project → Kanban template → choose Company-managed or Team-managed → name the project → click Create. You'll land on the board view with default columns: To Do, In Progress, Done.",
        },
        {
          type: "numbered",
          items: [
            "Add columns to match your real workflow — common additions: 'In Review', 'Ready for QA', 'In QA', 'Ready to Deploy'.",
            "Set WIP limits on each active column. A good starting point: limit 'In Progress' to the number of team members.",
            "Enable the backlog (board settings → Backlog → enable) to keep unstarted issues off the board until you're ready to pull them.",
            "Configure swimlanes if needed — an 'Expedite' lane (for urgent issues) bypassing WIP limits is a common addition.",
            "Add the team as project members and assign roles.",
          ],
        },
        {
          type: "subheading",
          text: "WIP Limits in Practice",
        },
        {
          type: "paragraph",
          text: "WIP limits are the heart of Kanban. They force the team to finish work before starting new work, which reduces context switching and surfaces bottlenecks immediately.",
        },
        {
          type: "bullets",
          items: [
            "When a column is at its WIP limit and someone wants to add another issue, the team must first help clear existing work — this is the Kanban 'stop the line' moment.",
            "A column consistently at its WIP limit is a bottleneck — the team should investigate and improve that stage.",
            "Set WIP limits in Jira: Board settings → Columns → click the WIP limit field next to a column.",
            "Jira shows the current count vs limit on the column header (e.g. '3/5'). The column turns red when the limit is breached.",
            "Start with generous limits and tighten them over time as the team gains confidence.",
          ],
        },
        {
          type: "subheading",
          text: "Kanban Metrics in Jira — Full Guide",
        },
        {
          type: "table",
          table: {
            headers: ["Metric", "What it measures", "How to access in Jira", "What to look for"],
            rows: [
              ["Cycle Time", "Time from first transition to In Progress → to Done", "Board → Reports → Control Chart", "Shorter average + tighter distribution = more predictable delivery"],
              ["Lead Time", "Time from issue creation → to Done (includes queue time)", "Board → Reports → Control Chart (toggle)", "High lead time = issues waiting too long before work even starts"],
              ["Throughput", "Issues completed per time period", "Calculate from Control Chart data or use Jira Automation", "Stable throughput = predictable team capacity for forecasting"],
              ["Cumulative Flow Diagram", "Area chart of issues in each stage over time", "Board → Reports → Cumulative Flow Diagram", "Widening coloured band = bottleneck; flat top = no work completing; smooth parallel bands = healthy flow"],
            ],
          },
        },
        {
          type: "subheading",
          text: "Reading the Cumulative Flow Diagram (CFD)",
        },
        {
          type: "bullets",
          items: [
            "Y-axis: number of issues. X-axis: time.",
            "Each colour band represents a workflow stage. The width of a band shows how many issues are stuck there.",
            "Widening 'In Progress' band: work is piling up in progress — WIP limit too high or team is blocked.",
            "Flat top line (no new issues completing): the team is blocked or no new work is reaching Done.",
            "Consistent, parallel, gently rising bands: healthy, predictable flow.",
            "Sudden step changes: a batch release or bulk import happened — investigate the cause.",
          ],
        },
        {
          type: "subheading",
          text: "Kanban vs Scrum Board — When to Choose Which",
        },
        {
          type: "table",
          table: {
            headers: ["Dimension", "Scrum Board", "Kanban Board"],
            rows: [
              ["Cadence", "Fixed sprints (1–4 weeks)", "Continuous — no iterations or fixed time boxes"],
              ["Planning ceremony", "Sprint Planning every sprint (~4 hrs for 2-week sprint)", "Pull items as capacity allows — no ceremony required"],
              ["Commitment", "Team commits to a sprint goal and a set of stories", "Team commits to WIP limits only"],
              ["WIP limits", "Implicit — sprint capacity sets a soft limit", "Explicit — hard limits per column enforced by Jira"],
              ["Metrics", "Burndown chart, velocity", "Cycle time, lead time, throughput, CFD"],
              ["Releases", "End-of-sprint releases; predictable cadence", "Release at any time — continuous delivery"],
              ["Best for", "Building new products; feature-driven teams; predictable cadence needed", "Support queues; maintenance; ops; unpredictable incoming work"],
              ["Backlog", "Backlog is central — sprint planning pulls from it", "Backlog is optional; issues can flow directly onto board"],
            ],
          },
        },
        {
          type: "note",
          text: "WIP limits are the single most powerful lever in Kanban. A board without WIP limits is just a visual task list — you've skipped the part that actually improves flow.",
        },
      ],
      keyPoints: [
        { label: "5 Kanban practices", value: "Visualise → Limit WIP → Manage Flow → Make Policies Explicit → Improve Collaboratively" },
        { label: "WIP limit rule", value: "In Progress WIP limit = number of team members is a safe starting point" },
        { label: "CFD warning sign", value: "Widening coloured band = bottleneck forming at that stage" },
        { label: "Cycle time", value: "Time In Progress → Done. Aim for shorter and more consistent, not just faster." },
        { label: "Kanban vs Scrum", value: "Kanban = continuous flow for variable work; Scrum = cadenced sprints for product development" },
      ],
    },
  ],
};
const jiraSearch: Course = {
  id: "jira-search",
  title: "Jira Cloud: Search, JQL & Agile Principles",
  subtitle: "LinkedIn Learning — Agile Project Management with Jira Cloud: 2 (4.7 ★)",
  chapters: [
    {
      id: "js-ch1",
      number: "Chapter 1",
      title: "Lean and Agile Principles",
      summary: "Covers the Lean principles that underpin Agile, how they relate to each other, and how both are expressed in Jira workflows.",
      content: [
        {
          type: "subheading",
          text: "What is Lean?",
        },
        {
          type: "paragraph",
          text: "Lean originated at Toyota in the 1940s as the Toyota Production System — a manufacturing philosophy focused on eliminating waste and maximising value flow to the customer. Agile software development borrows heavily from Lean thinking.",
        },
        {
          type: "subheading",
          text: "The 7 Lean Principles",
        },
        {
          type: "table",
          table: {
            headers: ["Principle", "What it means", "Agile / Jira expression"],
            rows: [
              ["Eliminate waste", "Remove anything that doesn't add value to the customer", "WIP limits, short sprints, no unnecessary documentation"],
              ["Amplify learning", "Use feedback loops to learn fast and adjust", "Sprint reviews, retrospectives, inspect-and-adapt cycles"],
              ["Decide as late as possible", "Delay irreversible decisions until you have the most information", "Iterative planning; don't commit the whole backlog upfront"],
              ["Deliver as fast as possible", "Speed reduces cost and increases learning", "Short sprints; continuous deployment; limit batch size"],
              ["Empower the team", "Those doing the work make the decisions", "Self-organising teams; Scrum Master removes blockers, not assign tasks"],
              ["Build integrity in", "Quality is built in, not inspected in at the end", "Definition of Done; TDD; code review; automated testing"],
              ["See the whole", "Optimise the whole system, not individual parts", "End-to-end flow metrics; avoid local optimisation (one fast team, one blocked team)"],
            ],
          },
        },
        {
          type: "subheading",
          text: "Lean vs Agile",
        },
        {
          type: "note",
          text: "Lean is the philosophy; Agile is its application to software. Lean asks 'what is waste?' — Agile answers with practices like sprints, standups, and retrospectives that systematically eliminate it.",
        },
        {
          type: "subheading",
          text: "Lean in Jira",
        },
        {
          type: "bullets",
          items: [
            "WIP limits on Kanban boards enforce the Lean 'stop starting, start finishing' principle.",
            "The Jira backlog is a pull system — teams pull work when they have capacity, not when it is pushed.",
            "Cumulative Flow Diagrams reveal waste (queues) building up between workflow stages.",
            "Velocity and cycle time metrics expose bottlenecks so the whole system can be optimised.",
          ],
        },
      ],
      keyPoints: [
        { label: "Lean origin", value: "Toyota Production System (1940s) — eliminate waste, maximise flow" },
        { label: "Key Lean insight", value: "Optimise the whole system, not individual steps" },
        { label: "Lean → Agile link", value: "Lean is the philosophy; Agile practices are its software-specific implementation" },
        { label: "Jira expression", value: "WIP limits, pull-based backlog, CFD, cycle time metrics" },
      ],
    },
    {
      id: "js-ch2",
      number: "Chapter 2",
      title: "Scrum Overview",
      summary: "A focused recap of Scrum roles, events, and artefacts and how each is represented inside Jira Cloud.",
      content: [
        {
          type: "subheading",
          text: "Scrum in 60 Seconds",
        },
        {
          type: "paragraph",
          text: "Scrum is a lightweight framework for delivering value in short iterations called sprints. It defines three roles, five events, and three artefacts — everything else is left to the team.",
        },
        {
          type: "table",
          table: {
            headers: ["Scrum element", "What it is", "Where it lives in Jira"],
            rows: [
              ["Product Backlog", "Ordered list of all desired product work", "Backlog view — left panel of a Scrum project"],
              ["Sprint Backlog", "Items committed for the current sprint", "Active sprint on the board"],
              ["Increment", "Working, done software at the end of each sprint", "Issues in 'Done' column meeting the DoD"],
              ["Sprint Planning", "Team selects stories and defines sprint goal", "Create sprint → drag issues → Start Sprint"],
              ["Daily Scrum", "15-min team sync on progress and blockers", "Board view — review cards in 'In Progress'"],
              ["Sprint Review", "Demo to stakeholders; inspect increment", "Board + reports during sprint; then Complete Sprint"],
              ["Retrospective", "Team improves process", "No native Jira feature — use Confluence or Miro"],
            ],
          },
        },
        {
          type: "subheading",
          text: "Creating a Sprint in Jira",
        },
        {
          type: "ui-hint",
          text: "Backlog view → click 'Create sprint' button at the top of the backlog → drag issues into the sprint → click the '…' menu on the sprint → 'Start sprint' → set sprint name, goal, start date, end date → click Start.",
        },
        {
          type: "subheading",
          text: "Completing a Sprint",
        },
        {
          type: "ui-hint",
          text: "Board view → click 'Complete sprint' (top-right) → Jira shows a summary of Done vs incomplete issues → choose where to send incomplete issues (backlog or next sprint) → click Complete.",
        },
      ],
      keyPoints: [
        { label: "Scrum artefacts in Jira", value: "Product Backlog = backlog view; Sprint Backlog = active sprint; Increment = Done issues" },
        { label: "Sprint lifecycle", value: "Create → populate → start → daily updates → review → complete" },
        { label: "Jira gap", value: "Jira has no built-in retrospective tool — use Confluence, Miro, or EasyRetro" },
      ],
    },
    {
      id: "js-ch3",
      number: "Chapter 3",
      title: "Scrum Overview 2",
      summary: "Hands-on walkthrough of Scrum project configuration for both company-managed and team-managed project types in Jira Cloud.",
      content: [
        {
          type: "subheading",
          text: "Company-Managed Scrum Project",
        },
        {
          type: "ui-hint",
          text: "Create project → select 'Scrum' template → choose 'Company-managed' → name your project → click Create. You'll see a Backlog and a Board tab in the left sidebar.",
        },
        {
          type: "bullets",
          items: [
            "Board columns map to workflow statuses — configured by a Jira admin in Project Settings → Board.",
            "Sprints are managed from the Backlog view — the sprint container appears above the backlog issues.",
            "Epics appear in a panel on the left of the backlog and can be used to filter/group issues.",
            "Reports available: Burndown Chart, Velocity Chart, Sprint Report, Epic Report, Version Report.",
          ],
        },
        {
          type: "subheading",
          text: "Team-Managed Scrum Project",
        },
        {
          type: "ui-hint",
          text: "Create project → select 'Scrum' template → choose 'Team-managed' → name your project → click Create. Setup is instant — no admin required.",
        },
        {
          type: "bullets",
          items: [
            "Columns are created directly on the board — click '+' to add a column; the column name becomes the status name.",
            "Sprints are created and managed from the Backlog tab.",
            "Epics are managed from the Backlog — there is a separate 'Epics' panel.",
            "Fewer reports than company-managed — Burndown and Velocity are available.",
          ],
        },
        {
          type: "subheading",
          text: "Side-by-Side Comparison",
        },
        {
          type: "table",
          table: {
            headers: ["Feature", "Company-Managed", "Team-Managed"],
            rows: [
              ["Who configures the board?", "Jira admin", "Any team member"],
              ["Workflow customisation", "Full (statuses, transitions, conditions)", "Limited (column name = status)"],
              ["Reports", "8+ report types", "Burndown + Velocity only"],
              ["Components", "Yes (admin-defined)", "No"],
              ["Custom fields", "Yes (admin adds)", "Limited preset fields only"],
              ["Epic management", "Epic panel in backlog + Roadmap", "Epic panel in backlog"],
            ],
          },
        },
      ],
      keyPoints: [
        { label: "Company-managed", value: "More power, requires admin — use for established teams with standards" },
        { label: "Team-managed", value: "Fast setup, less config — use for new teams or experiments" },
        { label: "Board columns", value: "Company-managed: admin maps statuses; Team-managed: column name IS the status" },
      ],
    },
    {
      id: "js-ch4",
      number: "Chapter 4",
      title: "Quick Search and Basic Search",
      summary: "How to use Jira's search bar for quick lookups and the basic search interface to build filtered views without writing JQL.",
      content: [
        {
          type: "subheading",
          text: "Quick Search",
        },
        {
          type: "paragraph",
          text: "The search bar at the top of every Jira page lets you find issues, projects, and boards instantly by typing keywords.",
        },
        {
          type: "ui-hint",
          text: "Click the Search bar (top-centre of Jira) or press '/' on your keyboard → type any keyword, issue key (e.g. SP-12), or project name → results appear instantly as you type.",
        },
        {
          type: "bullets",
          items: [
            "Search by issue key: type the exact key (e.g. 'SP-5') to jump directly to that issue.",
            "Search by keyword: searches summary, description, and comments.",
            "Results are grouped by type: Issues, Projects, Boards, People.",
            "Press Enter to go to the full search results page with all matches.",
          ],
        },
        {
          type: "subheading",
          text: "Basic Search (Issue Navigator)",
        },
        {
          type: "paragraph",
          text: "Basic search gives you dropdown filters to build queries without writing JQL. It is the best starting point before switching to JQL for complex queries.",
        },
        {
          type: "ui-hint",
          text: "Left sidebar → Filters → All work items → the search bar at the top shows filter dropdowns. If you see JQL text instead of dropdowns, click 'Switch to basic' on the right side of the search bar.",
        },
        {
          type: "table",
          table: {
            headers: ["Filter dropdown", "What it filters"],
            rows: [
              ["Project", "One or more specific projects"],
              ["Type", "Issue type: Story, Bug, Task, Epic, Sub-task"],
              ["Status", "Workflow status: To Do, In Progress, Done, etc."],
              ["Assignee", "The person the issue is assigned to (includes 'Me')"],
              ["Reporter", "The person who created/reported the issue"],
              ["Priority", "Highest, High, Medium, Low, Lowest"],
              ["Label", "Any label applied to the issue"],
              ["Sprint", "A specific sprint (open, closed, or future)"],
            ],
          },
        },
        {
          type: "subheading",
          text: "Saving a Search as a Filter",
        },
        {
          type: "ui-hint",
          text: "Run your search → click 'Save filter' (top-right of search results) → give it a name → click Submit. The filter then appears in your left sidebar under Filters for quick access.",
        },
        {
          type: "subheading",
          text: "Switching Between Basic and JQL",
        },
        {
          type: "ui-hint",
          text: "In the search bar area, look for the toggle on the right: 'Switch to JQL' (from basic view) or 'Switch to basic' (from JQL view). Jira converts your basic filters into JQL automatically when you switch — a great way to learn JQL syntax.",
        },
      ],
      keyPoints: [
        { label: "Quick search shortcut", value: "Press '/' anywhere in Jira to open the search bar" },
        { label: "Basic search", value: "Dropdown filters — no JQL needed; Jira builds the query for you" },
        { label: "Learn JQL trick", value: "Build a filter in basic search, then switch to JQL to see what it generated" },
        { label: "Save filters", value: "Saved filters appear in the sidebar — share them with teammates too" },
      ],
    },
    {
      id: "js-ch5",
      number: "Chapter 5",
      title: "Jira Query Language (JQL)",
      summary: "Full guide to writing JQL queries — syntax, fields, operators, functions, and practical examples for common use cases.",
      content: [
        {
          type: "subheading",
          text: "What is JQL?",
        },
        {
          type: "paragraph",
          text: "JQL (Jira Query Language) is a structured query language for searching Jira issues. It is more powerful than basic search and allows you to create precise, complex filters that basic search cannot express.",
        },
        {
          type: "subheading",
          text: "How to Access the JQL Editor",
        },
        {
          type: "ui-hint",
          text: "Left sidebar → Filters → All work items → in the search bar area, click 'Switch to JQL' (top-right). The search bar transforms into a JQL text editor with autocomplete. Type your query and press Enter to run it.",
        },
        {
          type: "subheading",
          text: "JQL Syntax",
        },
        {
          type: "paragraph",
          text: "Every JQL query follows the same pattern:",
        },
        {
          type: "code",
          code: {
            label: "Basic syntax",
            lines: [
              "field  operator  value",
              "",
              "-- Combine conditions --",
              "field operator value  AND  field operator value",
              "field operator value  OR   field operator value",
              "",
              "-- Sort results --",
              "field operator value  ORDER BY field ASC|DESC",
            ],
          },
        },
        {
          type: "subheading",
          text: "Common Fields",
        },
        {
          type: "table",
          table: {
            headers: ["Field", "Description", "Example value"],
            rows: [
              ["project", "The project the issue belongs to", "project = \"MY PROJECT\""],
              ["issuetype", "Type of issue", "issuetype = Story"],
              ["status", "Current workflow status", "status = \"In Progress\""],
              ["assignee", "Person assigned to the issue", "assignee = john.smith"],
              ["reporter", "Person who created the issue", "reporter = currentUser()"],
              ["priority", "Issue priority level", "priority = High"],
              ["labels", "Labels applied to the issue", "labels = \"tech-debt\""],
              ["sprint", "Sprint the issue belongs to", "sprint = \"Sprint 3\""],
              ["created", "Date the issue was created", "created >= -7d"],
              ["updated", "Date the issue was last updated", "updated >= \"2024-01-01\""],
              ["due", "Due date of the issue", "due <= endOfWeek()"],
              ["component", "Component of the project", "component = Frontend"],
              ["fixVersion", "Release version", "fixVersion = \"v2.0\""],
              ["\"Story Points\"", "Story point estimate", "\"Story Points\" > 5"],
            ],
          },
        },
        {
          type: "subheading",
          text: "Common Operators",
        },
        {
          type: "table",
          table: {
            headers: ["Operator", "Meaning", "Example"],
            rows: [
              ["=", "Exactly equals", "status = Done"],
              ["!=", "Does not equal", "status != Done"],
              ["IN", "Matches any value in a list", "status IN (\"To Do\", \"In Progress\")"],
              ["NOT IN", "Does not match any in list", "issuetype NOT IN (Sub-task, Epic)"],
              ["~", "Contains (text search)", "summary ~ \"login bug\""],
              ["!~", "Does not contain", "summary !~ \"spike\""],
              [">  >=", "Greater than / greater or equal", "created >= -30d"],
              ["<  <=", "Less than / less or equal", "due <= endOfWeek()"],
              ["IS EMPTY", "Field has no value", "assignee IS EMPTY"],
              ["IS NOT EMPTY", "Field has a value", "labels IS NOT EMPTY"],
              ["WAS", "Status was this value at any point", "status WAS \"In Progress\""],
              ["CHANGED", "Field value has changed", "status CHANGED BY currentUser()"],
            ],
          },
        },
        {
          type: "subheading",
          text: "Common Functions",
        },
        {
          type: "table",
          table: {
            headers: ["Function", "Returns", "Example"],
            rows: [
              ["currentUser()", "The logged-in user", "assignee = currentUser()"],
              ["openSprints()", "All currently open sprints", "sprint in openSprints()"],
              ["closedSprints()", "All closed/completed sprints", "sprint in closedSprints()"],
              ["futureSprints()", "Sprints not yet started", "sprint in futureSprints()"],
              ["startOfDay()", "Start of today", "created >= startOfDay()"],
              ["endOfDay()", "End of today", "due <= endOfDay()"],
              ["startOfWeek()", "Start of current week (Mon)", "updated >= startOfWeek()"],
              ["endOfWeek()", "End of current week (Sun)", "due <= endOfWeek()"],
              ["now()", "Current date and time", "updated >= now()"],
              ["-Nd / -Nw", "N days/weeks ago (relative date)", "created >= -7d"],
            ],
          },
        },
        {
          type: "subheading",
          text: "Sample JQL Queries",
        },
        {
          type: "code",
          code: {
            label: "All open issues assigned to me",
            lines: ["assignee = currentUser() AND status != Done"],
          },
        },
        {
          type: "code",
          code: {
            label: "All bugs in the current sprint",
            lines: ["issuetype = Bug AND sprint in openSprints()"],
          },
        },
        {
          type: "code",
          code: {
            label: "Issues created in the last 7 days",
            lines: ["created >= -7d ORDER BY created DESC"],
          },
        },
        {
          type: "code",
          code: {
            label: "High priority unassigned issues",
            lines: ["priority in (High, Highest) AND assignee is EMPTY AND status != Done"],
          },
        },
        {
          type: "code",
          code: {
            label: "Everything in my project that is overdue",
            lines: [
              "project = \"MYPROJECT\"",
              "AND due <= now()",
              "AND status != Done",
              "ORDER BY due ASC",
            ],
          },
        },
        {
          type: "code",
          code: {
            label: "All stories in the current sprint for a specific project",
            lines: [
              "project = \"MYPROJECT\"",
              "AND issuetype = Story",
              "AND sprint in openSprints()",
              "ORDER BY status ASC",
            ],
          },
        },
        {
          type: "code",
          code: {
            label: "Issues updated this week that I reported",
            lines: [
              "reporter = currentUser()",
              "AND updated >= startOfWeek()",
              "ORDER BY updated DESC",
            ],
          },
        },
        {
          type: "code",
          code: {
            label: "All unresolved blockers (issues blocking other issues)",
            lines: [
              "issue in linkedIssues(\"MYPROJECT-123\", \"is blocked by\")",
              "AND status != Done",
            ],
          },
        },
        {
          type: "subheading",
          text: "JQL Tips",
        },
        {
          type: "bullets",
          items: [
            "Autocomplete: Jira suggests field names, operators, and values as you type — press Ctrl+Space to trigger it manually.",
            "Quote values with spaces: status = \"In Progress\" not status = In Progress.",
            "Use AND/OR to combine conditions. AND narrows results; OR broadens them.",
            "Wrap OR conditions in brackets when mixing with AND: project = X AND (status = \"To Do\" OR status = \"In Progress\").",
            "ORDER BY goes at the very end: ... ORDER BY created DESC.",
            "Save frequent queries as filters and share them with the team via Filters → Share filter.",
          ],
        },
        {
          type: "ui-hint",
          text: "JQL autocomplete shortcut: when typing a field name, press Ctrl+Space (or just start typing) and Jira will suggest matching fields. After the field, it suggests valid operators. After the operator, it suggests valid values for that field — no need to memorise everything.",
        },
      ],
      keyPoints: [
        { label: "JQL syntax", value: "field  operator  value — combine with AND / OR — sort with ORDER BY" },
        { label: "Most useful function", value: "currentUser() — makes queries personal and reusable across accounts" },
        { label: "Most useful operator", value: "IN — matches multiple values in one condition instead of many OR clauses" },
        { label: "Learn trick", value: "Build in basic search → Switch to JQL to see the generated query" },
        { label: "Autocomplete", value: "Jira suggests fields, operators, and values as you type — use it" },
      ],
    },
  ],
};

const advancedJira: Course = {
  id: "advanced-jira",
  title: "Advanced Agile Project Management with Jira Cloud",
  subtitle: "LinkedIn Learning — Agile Project Management with Jira Cloud: 3 Advanced Topics (4.6 ★, 1,347 reviews)",
  chapters: [
    {
      id: "aj-ch1",
      number: "Chapter 1",
      title: "Filters",
      summary: "Deep dive into Jira filters — creating, saving, sharing, and subscribing to filters in both company-managed and team-managed projects.",
      content: [
        {
          type: "subheading",
          text: "What is a Filter?",
        },
        {
          type: "paragraph",
          text: "A Jira filter is a saved search query (JQL or basic) that you can name, store, and reuse. Filters power dashboards, boards, and scheduled email reports. They can be private or shared with teammates, groups, or the whole organisation.",
        },
        {
          type: "subheading",
          text: "Creating a Filter from Basic Search",
        },
        {
          type: "ui-hint",
          text: "Left sidebar → Filters → All work items → set your criteria using the dropdowns (Project, Type, Status, Assignee, etc.) → when results look right, click 'Save filter' (top-right) → enter a name → click Submit. The filter appears immediately in your sidebar under Filters.",
        },
        {
          type: "subheading",
          text: "Creating a Filter from JQL",
        },
        {
          type: "ui-hint",
          text: "From the search/filters view, click 'Switch to JQL' → type your JQL query → press Enter to preview results → click 'Save filter' → name it → Submit. JQL filters are far more powerful and allow complex date-relative, function-based, or multi-field conditions.",
        },
        {
          type: "code",
          code: {
            label: "Example: Save a useful recurring JQL filter",
            lines: [
              "-- 'My open issues this sprint'",
              "assignee = currentUser()",
              "AND sprint in openSprints()",
              "AND status != Done",
              "ORDER BY priority DESC",
            ],
          },
        },
        {
          type: "subheading",
          text: "Managing Saved Filters",
        },
        {
          type: "table",
          table: {
            headers: ["Action", "How to do it", "Note"],
            rows: [
              ["View all filters", "Left sidebar → Filters → View all filters", "Shows filters you own and filters shared with you"],
              ["Edit filter name/description", "Filters page → hover filter → ⋯ → Edit filter details", "Only the filter owner can edit"],
              ["Edit JQL of a filter", "Open the filter → modify the query → click 'Save filter'", "The filter updates for everyone who uses it"],
              ["Delete a filter", "Filters page → hover filter → ⋯ → Delete", "Dashboards using this filter will break — remove gadgets first"],
              ["Star / favourite", "Filters page → click the star icon next to a filter", "Favourited filters appear at the top of your Filters sidebar"],
              ["Copy a filter", "Filters page → hover → ⋯ → Copy filter", "Creates a duplicate you own — useful for personalising shared filters"],
            ],
          },
        },
        {
          type: "subheading",
          text: "Sharing Filters",
        },
        {
          type: "paragraph",
          text: "By default a saved filter is private (only you can see it). To share it, change its permissions. Sharing options depend on whether you are in a company-managed or team-managed project.",
        },
        {
          type: "ui-hint",
          text: "Filters page → hover the filter → ⋯ → Edit permissions → choose one of: Private (only you), My organisation (anyone with site access), Group (specific Jira group), Project role, or Public. Click Save.",
        },
        {
          type: "table",
          table: {
            headers: ["Share option", "Who can see it", "Best for"],
            rows: [
              ["Private", "Only you", "Personal tracking queries"],
              ["My organisation", "Everyone on the Jira site", "Company-wide KPI dashboards"],
              ["Group", "Members of a named Jira group", "Department-level reporting"],
              ["Project role", "People with a specific role in a project", "Project-scoped views"],
              ["Public", "Anyone, even without login", "Rare; open-source or external stakeholders"],
            ],
          },
        },
        {
          type: "subheading",
          text: "Filter Subscriptions (Email Reports)",
        },
        {
          type: "paragraph",
          text: "Jira can email you (or a group) the results of a filter on a schedule — daily stand-up digest, weekly overdue issues report, etc.",
        },
        {
          type: "ui-hint",
          text: "Filters page → hover the filter → ⋯ → Subscribe → set the schedule (daily, weekly, etc.) and time → choose recipients (yourself or a group) → click Subscribe. Jira emails the filter results at the chosen time.",
        },
        {
          type: "subheading",
          text: "Company-Managed vs Team-Managed: Filter Differences",
        },
        {
          type: "table",
          table: {
            headers: ["Feature", "Company-managed", "Team-managed"],
            rows: [
              ["Full JQL editor", "Yes — complete field and function support", "Yes — same JQL editor"],
              ["Filter sharing", "Full permission matrix (org, group, role, public)", "Limited — share within the project only"],
              ["Filter subscriptions", "Yes — email on a schedule", "Not available in team-managed"],
              ["Board quick filters", "Board → ⋯ → Board settings → Quick filters", "Board → ⋯ → Board settings → Quick filters (simplified)"],
              ["Advanced board config", "Full: swimlanes, column mapping, WIP limits", "Simplified: column config only"],
            ],
          },
        },
        {
          type: "subheading",
          text: "Quick Filters on a Board",
        },
        {
          type: "paragraph",
          text: "Quick filters are one-click JQL shortcuts displayed above the board. They let the team instantly narrow the board to their own issues, a specific label, or any condition — without leaving the board view.",
        },
        {
          type: "ui-hint",
          text: "Company-managed: Board → top-right ⋯ → Board settings → Quick filters → Add quick filter → enter name and JQL → Save. Team-managed: Board → ⋯ → Board settings → Filters tab → + Add quick filter.",
        },
        {
          type: "code",
          code: {
            label: "Useful quick filter JQL examples",
            lines: [
              "-- Only my issues",
              "assignee = currentUser()",
              "",
              "-- Bugs only",
              "issuetype = Bug",
              "",
              "-- High priority only",
              "priority in (High, Highest)",
              "",
              "-- No sub-tasks",
              "issuetype != Sub-task",
            ],
          },
        },
      ],
      keyPoints: [
        { label: "Filters = saved searches", value: "Any JQL or basic search can be saved, named, and reused" },
        { label: "Power them up", value: "Shared filters drive dashboards — create the filter first, build gadgets on top" },
        { label: "Subscriptions", value: "Schedule email reports of any filter to yourself or a group (company-managed only)" },
        { label: "Quick filters", value: "Add one-click JQL shortcuts above the board for fast narrowing" },
        { label: "Team-managed limit", value: "Sharing and subscriptions are limited in team-managed — use company-managed for org-wide reporting" },
      ],
    },
    {
      id: "aj-ch2",
      number: "Chapter 2",
      title: "Epics",
      summary: "Advanced epic management — creating and organising epics, linking stories, tracking progress in roadmaps, and differences between project types.",
      content: [
        {
          type: "subheading",
          text: "What is an Epic?",
        },
        {
          type: "paragraph",
          text: "An epic is a large body of work that spans multiple sprints and is broken down into smaller stories or tasks. Epics are used to group related work, track progress at a higher level, and communicate roadmap themes to stakeholders.",
        },
        {
          type: "table",
          table: {
            headers: ["Issue hierarchy", "Sits above", "Typically spans"],
            rows: [
              ["Epic", "Stories, Tasks, Bugs", "2–6 sprints (1–3 months)"],
              ["Story", "Sub-tasks", "1 sprint"],
              ["Task / Bug", "Sub-tasks", "1 sprint or less"],
              ["Sub-task", "Nothing", "Hours to days"],
            ],
            note: "Jira also supports Initiatives (above epics) in Jira Premium via Advanced Roadmaps.",
          },
        },
        {
          type: "subheading",
          text: "Creating an Epic — Company-Managed",
        },
        {
          type: "ui-hint",
          text: "Backlog view → top of the Epics panel (left side of backlog) → click '+ Create epic' → enter epic name → press Enter. Or: press 'C' anywhere → set Type to Epic → fill in Summary and fields → Create.",
        },
        {
          type: "subheading",
          text: "Creating an Epic — Team-Managed",
        },
        {
          type: "ui-hint",
          text: "Left sidebar → Backlog (or Board) → Epics section in the backlog → '+ Create epic'. Alternatively: press 'C' → set Type to Epic → Summary → Create. In team-managed, epics also appear as a colour-coded label on cards.",
        },
        {
          type: "subheading",
          text: "Adding Issues to an Epic",
        },
        {
          type: "table",
          table: {
            headers: ["Method", "Steps", "Works in"],
            rows: [
              ["Drag in backlog", "Open epics panel → drag backlog items onto an epic name", "Company-managed backlog"],
              ["Edit the issue", "Open issue → Epic Link field → select epic from dropdown", "Both project types"],
              ["Create inside epic", "Open the epic → Child issues section → '+ Create child issue'", "Both project types"],
              ["Bulk edit", "Backlog → select multiple issues (checkbox) → Bulk change → Edit → Epic Link", "Company-managed"],
            ],
          },
        },
        {
          type: "subheading",
          text: "Epic Colours",
        },
        {
          type: "paragraph",
          text: "Each epic gets a colour that appears as a left-border on backlog cards and board cards. Colours help you visually spot which theme a card belongs to at a glance.",
        },
        {
          type: "ui-hint",
          text: "Open the epic → click the colour swatch next to the epic name → pick a colour from the palette → Save. Use distinct colours for different business themes (e.g., purple for UX work, green for infra, orange for customer requests).",
        },
        {
          type: "subheading",
          text: "Roadmap View",
        },
        {
          type: "paragraph",
          text: "The Roadmap visualises epics on a timeline. It lets you see how epics overlap, which are upcoming, and how the project is progressing at a strategic level.",
        },
        {
          type: "ui-hint",
          text: "Left sidebar → Roadmap (company-managed) or Timeline (team-managed). Each epic bar shows start/end dates. Drag the bar ends to adjust dates. Click an epic bar to open a detail panel. Use the zoom controls (weeks/months/quarters) to change the time scale.",
        },
        {
          type: "table",
          table: {
            headers: ["Roadmap feature", "What it shows / does"],
            rows: [
              ["Epic bars", "Duration of each epic — drag to resize, drag to move"],
              ["Colour coding", "Each epic's assigned colour for quick visual identification"],
              ["Progress indicator", "% of child issues done shown inside each epic bar"],
              ["Child issues toggle", "Expand epic bar to see individual stories on the timeline"],
              ["Dependencies (Premium)", "Arrow lines between epics showing block/is-blocked-by relationships"],
              ["Labels / versions", "Filter roadmap by label or fix version to reduce noise"],
            ],
          },
        },
        {
          type: "subheading",
          text: "Tracking Epic Progress",
        },
        {
          type: "paragraph",
          text: "Jira automatically calculates epic completion based on the status of child issues. You can see this in the epic progress bar in the backlog panel or in the roadmap.",
        },
        {
          type: "bullets",
          items: [
            "Completion % = (Done issues / Total child issues) × 100.",
            "The progress bar is colour-coded: grey = To Do, blue = In Progress, green = Done.",
            "Update sprints regularly — issues moving to Done update the epic bar automatically.",
            "Use the epic's Status field to manually mark an epic as In Progress or Done when all child work is complete.",
          ],
        },
        {
          type: "subheading",
          text: "Completing an Epic",
        },
        {
          type: "ui-hint",
          text: "Open the epic issue → click the Status field → select Done (or your equivalent Done status). Jira asks if you want to move remaining open child issues to another epic or leave them unlinked — choose carefully so nothing gets orphaned.",
        },
        {
          type: "subheading",
          text: "Company-Managed vs Team-Managed: Epic Differences",
        },
        {
          type: "table",
          table: {
            headers: ["Feature", "Company-managed", "Team-managed"],
            rows: [
              ["Epic panel in backlog", "Dedicated left panel with drag-and-drop", "Inline epic section in backlog"],
              ["Roadmap / Timeline", "Roadmap (full timeline with dates)", "Timeline (simplified)"],
              ["Epic colours on cards", "Yes — left-border colour on backlog and board cards", "Yes — colour label chip on cards"],
              ["Epic Link field", "Separate 'Epic Link' field on issue", "Appears as 'Parent' field in team-managed"],
              ["Advanced Roadmaps", "Available in Premium — cross-project timelines", "Not available"],
              ["Child issue creation", "From epic: '+ Create child issue' in child panel", "Same: '+ Add child issue' from epic"],
            ],
          },
        },
        {
          type: "subheading",
          text: "Epic Best Practices",
        },
        {
          type: "bullets",
          items: [
            "Keep epics to a size that can be delivered in 1–3 months — if bigger, split into multiple epics.",
            "Give epics a clear, outcome-focused name: 'User Authentication Overhaul' not 'Auth work'.",
            "Set start/end dates on epics so they appear correctly in the roadmap.",
            "Assign a colour per business theme so the board is visually scannable across epics.",
            "Review epics in sprint planning to remind the team of the bigger picture.",
            "Close epics promptly when complete — stale open epics clutter the backlog and roadmap.",
          ],
        },
      ],
      keyPoints: [
        { label: "Epic purpose", value: "Group related stories into a deliverable theme that spans multiple sprints" },
        { label: "Roadmap", value: "Timeline view of all epics — set start/end dates, check progress bars, spot overlap" },
        { label: "Child issues", value: "Create stories inside an epic or link existing issues via the Epic Link / Parent field" },
        { label: "Progress auto-tracks", value: "Epic completion % updates automatically as child issues move to Done" },
        { label: "Team-managed note", value: "Epic Link is called 'Parent' field in team-managed — same concept, different label" },
      ],
    },
    {
      id: "aj-ch3",
      number: "Chapter 3",
      title: "Dashboards",
      summary: "Building and sharing Jira dashboards — creating dashboards, adding gadgets, customising layouts, and using dashboards to visualise team health.",
      content: [
        {
          type: "subheading",
          text: "What is a Dashboard?",
        },
        {
          type: "paragraph",
          text: "A Jira dashboard is a customisable page made of gadgets — visual widgets that pull data from filters, projects, and sprints. Dashboards give you an at-a-glance view of project health, workload, velocity, and more.",
        },
        {
          type: "subheading",
          text: "Creating a Dashboard",
        },
        {
          type: "ui-hint",
          text: "Top navigation bar → Dashboards → Create dashboard → enter Name and Description → set Shared with (private, group, or organisation) → click Create. You land on your empty dashboard ready to add gadgets.",
        },
        {
          type: "subheading",
          text: "Adding Gadgets",
        },
        {
          type: "ui-hint",
          text: "On any dashboard you own → click 'Add gadget' (top-right, or the + button) → browse or search the gadget catalogue → click 'Add gadget' next to the one you want → configure it in the panel that opens → click Save.",
        },
        {
          type: "subheading",
          text: "Key Jira Gadgets",
        },
        {
          type: "table",
          table: {
            headers: ["Gadget", "What it shows", "Key config"],
            rows: [
              ["Filter Results", "A table of issues matching a saved filter", "Choose filter; select columns to display"],
              ["Pie Chart", "Issues grouped by any field (status, priority, assignee, etc.)", "Choose filter + field to slice by"],
              ["Two Dimensional Filter Statistics", "A matrix of two fields (e.g. status × priority)", "Choose filter + two field dimensions"],
              ["Sprint Health", "Current sprint progress — to do / in progress / done", "Choose board / sprint"],
              ["Sprint Burndown Chart", "Story points / issue count burned down over the sprint", "Choose board"],
              ["Velocity Chart", "Sprint-by-sprint commitment vs completion over time", "Choose board; shows last N sprints"],
              ["Assigned to Me", "Issues currently assigned to you across all projects", "No filter needed — personal widget"],
              ["Activity Stream", "Live feed of recent activity across selected projects", "Choose projects to include"],
              ["Created vs Resolved", "Bar chart of issues created vs resolved per day/week", "Choose filter + date range"],
              ["Issue Statistics", "Count of issues grouped by a field", "Choose filter + grouping field"],
            ],
          },
        },
        {
          type: "subheading",
          text: "Dashboard Layout",
        },
        {
          type: "paragraph",
          text: "Jira supports multiple column layouts for a dashboard. You can drag gadgets between columns to reorganise them.",
        },
        {
          type: "ui-hint",
          text: "Dashboard → click the layout icon (grid icon, top-right) → choose 1, 2, or 3 columns (or asymmetric layouts). Drag gadget header bars to reorder or move them between columns. Click the pencil icon on a gadget to reconfigure it.",
        },
        {
          type: "subheading",
          text: "Sharing a Dashboard",
        },
        {
          type: "ui-hint",
          text: "Open the dashboard → top-right ⋯ menu → Edit dashboard → Shared with section → click Add → choose: Private (only you), My organisation, Group, Project role, or Logged in users → Save. Shared dashboards appear in teammates' Dashboards → Starred / Other.",
        },
        {
          type: "table",
          table: {
            headers: ["Share scope", "Who sees it", "Typical use"],
            rows: [
              ["Private", "Only the owner", "Personal task view"],
              ["My organisation", "Everyone on the Jira site", "Company-wide sprint status wall"],
              ["Group", "A specific Jira group", "Team dashboards (e.g. Frontend team)"],
              ["Project role", "People in a role on a specific project", "Stakeholder-facing progress boards"],
              ["Logged in users", "Any authenticated user", "Open internal transparency dashboards"],
            ],
          },
        },
        {
          type: "subheading",
          text: "Making a Dashboard Your Home",
        },
        {
          type: "ui-hint",
          text: "Open the dashboard → top-right ⋯ → Set as my default dashboard. Now when you navigate to Jira's home page (the Jira logo) this dashboard opens first. Team leads often set a sprint health dashboard as their default.",
        },
        {
          type: "subheading",
          text: "Lab: Cloud — Key Steps Summary",
        },
        {
          type: "numbered",
          items: [
            "Create a saved JQL filter (e.g. 'My team's open issues this sprint') — this becomes the data source.",
            "Navigate to Dashboards → Create dashboard → name it 'Team Sprint Dashboard'.",
            "Add a 'Filter Results' gadget → point it at your filter → choose columns: Key, Summary, Assignee, Status, Priority.",
            "Add a 'Pie Chart' gadget → same filter → slice by Status — instant sprint health doughnut.",
            "Add a 'Sprint Health' gadget → choose your board — shows To Do / In Progress / Done counts.",
            "Set layout to 2 columns: pie + sprint health on the left; filter results spanning full width at the bottom.",
            "Share the dashboard with My organisation so the whole team can see it.",
            "Set it as your default dashboard.",
          ],
        },
        {
          type: "subheading",
          text: "Dashboard Best Practices",
        },
        {
          type: "bullets",
          items: [
            "Always base gadgets on saved filters — it makes the dashboard reusable and the filters independently useful.",
            "Keep dashboards focused: one dashboard per audience (team dashboard, stakeholder dashboard, personal dashboard).",
            "Use the Pie Chart + Filter Results combo as a quick sprint health check.",
            "Use Created vs Resolved to spot when incoming work is outpacing completions (scope creep signal).",
            "Review dashboards in the retrospective — if a gadget is never looked at, remove it.",
            "Name dashboards clearly: 'Frontend Team Sprint 2026' not 'My dashboard 3'.",
          ],
        },
      ],
      keyPoints: [
        { label: "Dashboard = gadgets on filters", value: "Every gadget needs a saved filter as its data source — create the filter first" },
        { label: "Most useful gadget", value: "Filter Results — flexible table that shows exactly the columns your team needs" },
        { label: "Sprint health combo", value: "Pie Chart (by Status) + Sprint Health gadget gives instant sprint visibility" },
        { label: "Sharing", value: "Share with 'My organisation' for team-wide dashboards; keep personal ones private" },
        { label: "Default dashboard", value: "Set your best sprint dashboard as your Jira home via ⋯ → Set as my default" },
      ],
    },
    {
      id: "aj-ch4",
      number: "Chapter 4",
      title: "Putting It All Together",
      summary: "End-to-end integration of filters, epics, and dashboards — a practical workflow combining all three tools to run a real agile project in Jira Cloud.",
      content: [
        {
          type: "subheading",
          text: "The Integration Mindset",
        },
        {
          type: "paragraph",
          text: "Filters, epics, and dashboards are not independent features — they form a layered system. Epics give your work strategic structure. Filters slice that work into meaningful views. Dashboards surface those views visually to the right audience at the right time.",
        },
        {
          type: "table",
          table: {
            headers: ["Layer", "What it does", "Tool"],
            rows: [
              ["Structure", "Organise work into themes and deliverables", "Epics + Roadmap"],
              ["Query", "Slice work into targeted, reusable views", "Filters (JQL)"],
              ["Visualise", "Surface key metrics for the team and stakeholders", "Dashboards + Gadgets"],
            ],
          },
        },
        {
          type: "subheading",
          text: "End-to-End Workflow",
        },
        {
          type: "numbered",
          items: [
            "Define epics for the quarter — one per major theme. Set start/end dates. Assign colours.",
            "Break epics into stories in the backlog. Each story inherits its parent epic.",
            "Run sprints normally — pull stories from the backlog into a sprint, complete them, repeat.",
            "Create JQL filters to surface useful cross-sprint views: 'All open bugs', 'My team current sprint', 'Overdue issues', 'Epic X progress'.",
            "Build a dashboard with gadgets powered by those filters. Share with the team and stakeholders.",
            "At sprint review: demo working software, glance at the dashboard to discuss metrics.",
            "At retrospective: review the dashboard trends — velocity, created vs resolved, overdue count.",
            "At end of epic: mark epic Done. Review what got delivered vs planned. Feed learning into next quarter.",
          ],
        },
        {
          type: "subheading",
          text: "Recommended Filter Set",
        },
        {
          type: "table",
          table: {
            headers: ["Filter name", "JQL", "Used for"],
            rows: [
              ["My active sprint", "assignee = currentUser() AND sprint in openSprints() AND status != Done", "Personal daily focus"],
              ["Team current sprint", "project = MYPROJ AND sprint in openSprints() ORDER BY priority DESC", "Sprint board filter / dashboard gadget"],
              ["All open bugs", "project = MYPROJ AND issuetype = Bug AND status != Done ORDER BY priority DESC", "Bug triage sessions"],
              ["Overdue issues", "project = MYPROJ AND due <= now() AND status != Done ORDER BY due ASC", "Weekly overdue review"],
              ["Epic X progress", "project = MYPROJ AND \"Epic Link\" = MYPROJ-42 ORDER BY status ASC", "Per-epic status check"],
              ["Created this week", "project = MYPROJ AND created >= startOfWeek() ORDER BY created DESC", "Intake monitoring"],
              ["Done last sprint", "project = MYPROJ AND sprint in closedSprints() AND status = Done ORDER BY updated DESC", "Sprint retrospective list"],
            ],
          },
        },
        {
          type: "subheading",
          text: "Recommended Dashboard Layout",
        },
        {
          type: "table",
          table: {
            headers: ["Gadget", "Filter / source", "Audience"],
            rows: [
              ["Sprint Health", "Current board", "Team — sprint status at a glance"],
              ["Pie Chart (by Status)", "Team current sprint filter", "Team — proportion To Do / In Progress / Done"],
              ["Filter Results (sprint issues)", "Team current sprint filter", "Team — detailed card list"],
              ["Velocity Chart", "Current board", "Team / Manager — sprint-by-sprint delivery trend"],
              ["Created vs Resolved", "All issues filter", "Manager — scope creep detection"],
              ["Pie Chart (by Assignee)", "Team current sprint filter", "Lead — workload distribution"],
              ["Filter Results (bugs)", "All open bugs filter", "QA / Lead — bug watch"],
            ],
          },
        },
        {
          type: "subheading",
          text: "Company-Managed vs Team-Managed: Full Comparison",
        },
        {
          type: "table",
          table: {
            headers: ["Capability", "Company-managed", "Team-managed"],
            rows: [
              ["Epics panel in backlog", "Yes — full drag-and-drop panel", "Yes — inline list"],
              ["Roadmap / Timeline", "Full roadmap with dates + dependencies", "Simplified timeline"],
              ["Advanced Roadmaps", "Yes (Premium)", "No"],
              ["Filter sharing", "Full permission matrix", "Within project only"],
              ["Filter subscriptions", "Yes — scheduled email", "No"],
              ["Board quick filters", "Full JQL", "Simplified"],
              ["Dashboards", "Full gadget catalogue", "Full gadget catalogue (same)"],
              ["Custom fields", "Yes — unlimited", "Limited set of standard fields"],
              ["Workflow customisation", "Full custom workflows per issue type", "Simplified: To Do / In Progress / Done"],
              ["Best for", "Large teams, complex projects, enterprise", "Small teams, simple projects, quick setup"],
            ],
          },
        },
        {
          type: "subheading",
          text: "Key Habits for Advanced Jira Users",
        },
        {
          type: "bullets",
          items: [
            "Filter first, dashboard second — every dashboard gadget needs a well-crafted filter behind it.",
            "One epic per business outcome — not one per team or one per sprint.",
            "Review the roadmap weekly in planning to keep dates and priorities current.",
            "Share filters generously — a filter shared with the team is a filter that gets maintained.",
            "Keep dashboards minimal — 5 focused gadgets beat 15 cluttered ones.",
            "Use quick filters on the board for common 'zoomed-in' views without leaving the board.",
            "Subscribe key stakeholders to a weekly filter email — keeps everyone informed without meetings.",
          ],
        },
        {
          type: "subheading",
          text: "Learning Path: What to Try Next",
        },
        {
          type: "bullets",
          items: [
            "Jira Automation — trigger actions when issues move status, to auto-assign, notify, or close epics.",
            "Advanced Roadmaps (Jira Premium) — cross-project timelines and capacity planning.",
            "Confluence integration — link Jira issues to Confluence pages for specification and documentation.",
            "Component management — slice a project into components (Frontend, Backend, API) and filter by them.",
            "Release management — use Fix Versions to plan and track releases across sprints.",
          ],
        },
      ],
      keyPoints: [
        { label: "The system", value: "Epics structure → Filters query → Dashboards visualise — use all three together" },
        { label: "Filter first", value: "Every dashboard gadget needs a saved filter — build the filters before the dashboard" },
        { label: "Epic habit", value: "One epic per business outcome; review the roadmap every week to keep it current" },
        { label: "Stakeholder comms", value: "Share dashboards and schedule filter email subscriptions to replace status meetings" },
        { label: "Company vs team", value: "Company-managed for scale and compliance; team-managed for quick standalone projects" },
      ],
    },
  ],
};

const mistakesToAvoid: Course = {
  id: "mistakes-to-avoid",
  title: "Mistakes to Avoid in Agile Project Management",
  subtitle: "LinkedIn Learning — Mistakes to Avoid in Agile Project Management (4.7 ★, 1,529 reviews)",
  chapters: [
    {
      id: "ma-ch1",
      number: "Chapter 1",
      title: "Launching Agile Project Management",
      summary: "The most common mistakes teams make when first adopting agile — misreading what agile actually is, over-promising outcomes, moving too fast, and using inconsistent naming.",
      content: [
        {
          type: "subheading",
          text: "Misunderstanding Agile",
        },
        {
          type: "paragraph",
          text: "The most dangerous mistake is treating agile as a process or a set of ceremonies rather than a mindset. Teams that 'do' standups and sprints without embracing the underlying values (collaboration, feedback, continuous improvement) are doing agile theatre — the forms without the substance.",
        },
        {
          type: "table",
          table: {
            headers: ["Common misunderstanding", "What agile actually means"],
            rows: [
              ["Agile = no planning", "Agile replaces big up-front planning with continuous, lightweight planning every sprint"],
              ["Agile = no documentation", "Agile values working software OVER comprehensive docs — some docs are still valuable"],
              ["Agile = no deadlines", "Agile uses sprint goals and release dates; it makes commitments visible, not invisible"],
              ["Agile = faster delivery of everything", "Agile delivers working software sooner; it does not automatically double your team's output"],
              ["Agile = standup meetings", "Standup is one 15-minute ceremony — agile is an entire culture of inspect-and-adapt"],
              ["Agile = no manager", "Agile changes the manager's role from directing tasks to removing impediments and coaching"],
            ],
          },
        },
        {
          type: "note",
          text: "The Agile Manifesto values: Individuals and interactions over processes and tools. Working software over comprehensive documentation. Customer collaboration over contract negotiation. Responding to change over following a plan.",
        },
        {
          type: "subheading",
          text: "Don't Over-Promise Results",
        },
        {
          type: "paragraph",
          text: "One of the most damaging launch mistakes is making stakeholder commitments like 'we will deliver all of these features by Q3 using agile.' Agile enables faster feedback and course-correction — it does not guarantee a fixed scope by a fixed date.",
        },
        {
          type: "bullets",
          items: [
            "The agile iron triangle is: fix time and resources, let scope flex — not fix all three.",
            "Over-promising creates the same death-march pressure as waterfall, just with sprint ceremony on top.",
            "Instead of promising features, promise sprint reviews: 'every two weeks you'll see working software and can redirect us.'",
            "Use velocity data (after 3–4 sprints) to give realistic forecasts based on evidence, not optimism.",
            "If forced to give an estimate, use a range: 'based on our current velocity, we expect 8–12 features by end of Q3.'",
          ],
        },
        {
          type: "subheading",
          text: "Set the Right Pace",
        },
        {
          type: "paragraph",
          text: "Trying to implement every agile ceremony, tool, and practice simultaneously overwhelms teams and makes adoption fragile. The mistake is 'big bang' agile transformation instead of incremental adoption.",
        },
        {
          type: "table",
          table: {
            headers: ["Wrong approach", "Right approach"],
            rows: [
              ["Roll out Scrum, Kanban, SAFe, and OKRs in week one", "Start with one framework (e.g. Scrum) and one board in Jira"],
              ["Enforce every ceremony from day one", "Start with sprint planning + daily standup; add retros in sprint 2"],
              ["Hire an agile coach and expect instant transformation", "Embed the coach for 3–6 months of gradual change"],
              ["Change everything about how the team works overnight", "Change one practice per sprint; review its effect in the retro"],
            ],
          },
        },
        {
          type: "subheading",
          text: "Consistent Project Titles",
        },
        {
          type: "paragraph",
          text: "Inconsistent naming conventions for projects, sprints, and epics in Jira creates chaos in search, filtering, and reporting. If one team names sprints 'Sprint 1' and another uses 'Q2-W1', JQL queries that reference sprint names break.",
        },
        {
          type: "code",
          code: {
            label: "Problem: inconsistent sprint naming breaks JQL",
            lines: [
              "-- Team A names their sprints:",
              "  Sprint 1, Sprint 2, Sprint 3",
              "",
              "-- Team B names their sprints:",
              "  Q2 Sprint 1, Q2-W3, June Sprint",
              "",
              "-- This JQL works for Team A but not Team B:",
              "sprint = \"Sprint 1\" AND project = TEAMB",
              "",
              "-- Consistent convention across ALL teams:",
              "  PROJ-2026-S01, PROJ-2026-S02, PROJ-2026-S03",
              "",
              "-- Now this works reliably:",
              "sprint = \"PROJ-2026-S01\"",
            ],
          },
        },
        {
          type: "bullets",
          items: [
            "Agree a naming convention before your first sprint and document it in Confluence or a Jira project description.",
            "Apply the same convention to: project keys, sprint names, epic names, labels, fix versions, and component names.",
            "Project key tip: keep it short (3–5 chars), meaningful, and unique. ECOM, AUTH, INF — not PROJ1, PROJ2.",
            "Use the same date format everywhere (YYYY-MM or Q format) so ORDER BY works predictably.",
          ],
        },
      ],
      keyPoints: [
        { label: "Agile is a mindset", value: "Ceremonies without values = agile theatre. The Manifesto principles come first." },
        { label: "Don't fix scope+date", value: "Agile fixes time and resources; let scope flex. Over-promising reintroduces waterfall pressure." },
        { label: "Pace yourself", value: "Adopt one practice at a time. Prove it works before adding the next one." },
        { label: "Name things consistently", value: "Agree a naming convention for projects, sprints, and epics before day one — it makes JQL and reporting reliable." },
      ],
    },
    {
      id: "ma-ch2",
      number: "Chapter 2",
      title: "Mistakes When Gaining Buy-In",
      summary: "How poor leadership behaviour, excessive process overhead, and lack of transparency destroy agile adoption before it takes root.",
      content: [
        {
          type: "subheading",
          text: "Not Setting the Tone",
        },
        {
          type: "paragraph",
          text: "Agile adoption fails when leaders say the right words but continue behaving in waterfall ways. Teams watch what their manager does, not what they say. If the manager demands a 6-month Gantt chart while calling the process 'agile', the team concludes that agile is just a label.",
        },
        {
          type: "table",
          table: {
            headers: ["Leader says (agile)", "Leader does (waterfall)", "Effect on team"],
            rows: [
              ["'You own the work'", "Assigns specific tasks to specific people in meetings", "Team stops self-organising; waits for instructions"],
              ["'Embrace change'", "Gets angry when the sprint changes mid-stream", "Team hides problems rather than raising them"],
              ["'Fail fast, learn fast'", "Blames individuals when a sprint goal is missed", "Team avoids risk; story estimates balloon with padding"],
              ["'We work transparently'", "Filters bad news before it reaches stakeholders", "Stakeholders distrust the board; request separate status meetings"],
            ],
          },
        },
        {
          type: "bullets",
          items: [
            "Leaders must attend sprint reviews and retrospectives — not just kick-offs.",
            "Managers should ask 'what impediments can I remove?' at standups, not 'what did you finish yesterday?'",
            "Demonstrate the inspect-and-adapt cycle at the leadership level: acknowledge when strategy changes and why.",
            "Celebrate learning from failures publicly, not just celebrating successes.",
          ],
        },
        {
          type: "subheading",
          text: "Too Much Regulation",
        },
        {
          type: "paragraph",
          text: "Piling on approval gates, mandatory templates, and sign-off chains recreates the bureaucracy agile was designed to escape. This is especially common when agile is adopted within a traditionally governed organisation.",
        },
        {
          type: "table",
          table: {
            headers: ["Over-regulated symptom", "Agile alternative"],
            rows: [
              ["Every story needs a 2-page spec approved by a committee", "User story + acceptance criteria in a Jira description field; PO approves in refinement"],
              ["Code must pass a Change Advisory Board before merging", "Automated CI/CD gates replace manual CAB for routine changes"],
              ["Sprint cannot start until a project manager signs off the sprint plan", "Team self-approves sprint plan; PO confirms sprint goal"],
              ["Retrospective action items need VP approval", "Team owns their own process improvements; escalate only structural blockers"],
              ["All Jira fields must be filled in for every issue", "Require only the minimum viable fields: summary, type, acceptance criteria"],
            ],
          },
        },
        {
          type: "note",
          text: "Regulation protects the organisation but kills team autonomy. The right balance: regulate outcomes and standards (e.g. security, compliance), not methods and ceremonies.",
        },
        {
          type: "subheading",
          text: "Lack of Transparency",
        },
        {
          type: "paragraph",
          text: "Agile depends on everyone seeing the real state of the work. When teams hide problems, cherry-pick metrics, or keep the board out of date, stakeholders lose trust and agile's inspect-and-adapt engine breaks down.",
        },
        {
          type: "bullets",
          items: [
            "Keep the Jira board up to date daily — a stale board is actively misleading, not just unhelpful.",
            "Raise blockers at the standup the day they appear. Waiting a week means a day problem becomes a sprint problem.",
            "Share the sprint burndown with stakeholders, including sprints that didn't go to plan.",
            "In retrospectives, name real problems. 'Everything went fine' retros produce zero improvement.",
            "If a sprint goal will be missed, tell stakeholders early — not on the last day of the sprint.",
          ],
        },
        {
          type: "ui-hint",
          text: "Jira transparency tip: pin the board link and the dashboard link in your team Slack channel or meeting invite. When it's one click away, people actually look at it before asking for status updates.",
        },
        {
          type: "code",
          code: {
            label: "JQL to catch stale (untouched) in-progress issues",
            lines: [
              "status = \"In Progress\"",
              "AND updated <= -3d",
              "AND project = \"MYPROJECT\"",
              "ORDER BY updated ASC",
            ],
          },
        },
      ],
      keyPoints: [
        { label: "Leaders go first", value: "Agile culture is set by leadership behaviour, not by sending the team on a Scrum course." },
        { label: "Regulate outcomes", value: "Constrain what gets delivered (quality, security); don't constrain how the team works." },
        { label: "Transparency is non-negotiable", value: "A visible, up-to-date board is the foundation of agile trust. Hiding problems makes them worse." },
        { label: "Stale board fix", value: "Use a JQL filter to catch issues that haven't been updated in 3+ days — review them in standup." },
      ],
    },
    {
      id: "ma-ch3",
      number: "Chapter 3",
      title: "Mistakes When Building Teams",
      summary: "How task assignment, value mismatches, estimation confusion, and poor change management undermine self-organising agile teams.",
      content: [
        {
          type: "subheading",
          text: "Assigning Tasks",
        },
        {
          type: "paragraph",
          text: "In agile, team members pull work from the top of the backlog based on their capacity. When managers assign specific tasks to specific people, they bypass self-organisation — the core mechanism that makes agile teams resilient and high-performing.",
        },
        {
          type: "table",
          table: {
            headers: ["Assignment (wrong)", "Pull system (right)", "Why it matters"],
            rows: [
              ["'John, you take AUTH-12; Sarah, take AUTH-13'", "Team reviews sprint backlog; each person picks the top unstarted item", "Pull creates ownership; assignment creates obligation"],
              ["PM updates the 'assigned to' field for every issue", "Developer assigns themselves when they start the issue", "Developers know their own capacity; PM does not"],
              ["Tasks pre-assigned before sprint planning ends", "Sprint planning ends with a committed backlog; assignment happens at standup", "Circumstances change overnight; fixed assignment ignores this"],
            ],
          },
        },
        {
          type: "ui-hint",
          text: "Jira tip: leave the Assignee field blank when adding issues to the sprint. At each standup, the person who is about to start an issue assigns it to themselves by clicking the Assignee field → their name. The board then shows who is actually working on what, not who was told to work on what.",
        },
        {
          type: "subheading",
          text: "Overlooking Values",
        },
        {
          type: "paragraph",
          text: "Hiring developers purely for technical skills and ignoring whether they share agile values — collaboration, transparency, continuous learning — creates teams that technically function but culturally resist agile. One person who hoards knowledge or refuses to pair-program can block the whole team.",
        },
        {
          type: "bullets",
          items: [
            "Interview for agile values: ask how candidates handled a failed sprint, how they give feedback, or how they handled a disagreement about a technical approach.",
            "The Agile Manifesto's first value is 'Individuals and interactions' — individuals with good values create better interactions.",
            "Watch for value mismatches in retros: do team members blame each other instead of examining the process?",
            "Agile values to screen for: openness to change, comfort with uncertainty, willingness to collaborate across roles, growth mindset.",
          ],
        },
        {
          type: "subheading",
          text: "Predicting, Not Estimating",
        },
        {
          type: "paragraph",
          text: "A prediction is a commitment: 'This will take 3 days.' An estimate is a probabilistic guess: 'Based on similar work, I think this is a 5-point story — could be less if the API is clean, more if we hit edge cases.' Agile requires estimates, not predictions. Confusing the two destroys psychological safety.",
        },
        {
          type: "table",
          table: {
            headers: ["Prediction (avoid)", "Estimate (use)"],
            rows: [
              ["'AUTH-12 will be done by Thursday'", "'AUTH-12 is a 3-pointer — likely mid-sprint if nothing blocks'"],
              ["'This feature takes 2 weeks'", "'This epic is about 20 story points — at our velocity (15 pts/sprint) that's ~1.5 sprints'"],
              ["'I'll have the bug fixed in 2 hours'", "'Feels like a quick fix — I'm putting it in the sprint but flagging that root cause is unclear'"],
            ],
          },
        },
        {
          type: "code",
          code: {
            label: "JQL: find issues with no story point estimate (unestimated backlog risk)",
            lines: [
              "project = \"MYPROJECT\"",
              "AND issuetype = Story",
              "AND \"Story Points\" is EMPTY",
              "AND status = \"To Do\"",
              "ORDER BY created ASC",
            ],
          },
        },
        {
          type: "subheading",
          text: "Managing Change Incorrectly",
        },
        {
          type: "paragraph",
          text: "There are two opposite mistakes: refusing all mid-sprint changes (too rigid) and accepting every interruption that arrives (too permissive). Both break the team. The right answer is a defined, lightweight change process.",
        },
        {
          type: "table",
          table: {
            headers: ["Mistake", "Consequence", "Correct approach"],
            rows: [
              ["Refuse all mid-sprint changes", "Critical bugs and urgent business needs go unaddressed; stakeholders lose faith", "Define an 'expedite' lane for P1 bugs and true urgencies with a WIP limit of 1"],
              ["Accept every mid-sprint request", "Sprint goal becomes meaningless; velocity becomes unpredictable; team burns out", "All non-urgent items go to the backlog for next sprint planning"],
              ["No process for urgencies", "Every request is declared 'urgent' by whoever asks loudest", "Define urgency criteria: customer-facing outage, legal/compliance risk, revenue blocked"],
            ],
          },
        },
        {
          type: "note",
          text: "The Scrum Guide says: during a sprint, no changes are made that would endanger the sprint goal. This doesn't mean zero flexibility — it means protecting the goal while allowing scope swap with Product Owner approval.",
        },
      ],
      keyPoints: [
        { label: "Pull, don't push", value: "Team members self-assign from the top of the sprint backlog — managers don't assign individual tasks." },
        { label: "Hire for values too", value: "Technical skills get someone in the role; agile values make the team actually work." },
        { label: "Estimate ≠ predict", value: "Estimates carry uncertainty. Treat them as ranges, not promises — protect psychological safety." },
        { label: "Change process", value: "Define what counts as 'urgent enough to interrupt a sprint' before the sprint starts, not during it." },
      ],
    },
    {
      id: "ma-ch4",
      number: "Chapter 4",
      title: "Mistakes When Setting Cadence",
      summary: "How skipping planning, infrequent releases, avoiding stakeholders, and ignoring feedback loops break the agile rhythm that makes the whole system work.",
      content: [
        {
          type: "subheading",
          text: "Not Planning",
        },
        {
          type: "paragraph",
          text: "Sprint planning is not optional and it is not a formality to rush through. Without it, the team has no shared sprint goal, no agreed capacity, and no joint understanding of what 'done' looks like for each story. The result is a chaotic sprint where everyone works on different things.",
        },
        {
          type: "bullets",
          items: [
            "Sprint planning creates a sprint goal: a one-sentence statement of what the sprint achieves for the customer.",
            "Without a sprint goal, there is no way to make trade-off decisions mid-sprint when something goes wrong.",
            "Planning also surfaces dependencies: if AUTH blocks PAYMENT, that needs to be known before the sprint starts.",
            "Typical planning time: 1–2 hours for a 2-week sprint. If it takes 4 hours, the backlog isn't refined enough.",
            "The output of planning is the sprint backlog — a set of stories the team believes it can complete.",
          ],
        },
        {
          type: "code",
          code: {
            label: "JQL: sprint goal check — count stories in current sprint with no acceptance criteria",
            lines: [
              "project = \"MYPROJECT\"",
              "AND sprint in openSprints()",
              "AND issuetype = Story",
              "AND description is EMPTY",
              "ORDER BY created ASC",
            ],
          },
        },
        {
          type: "subheading",
          text: "Not Releasing Frequently",
        },
        {
          type: "paragraph",
          text: "Long release cycles (quarterly or semi-annually) defeat the primary purpose of agile: fast feedback. If users don't see working software until six months after you built it, every assumption you made in those six months may be wrong.",
        },
        {
          type: "table",
          table: {
            headers: ["Release cadence", "Feedback loop", "Risk exposure"],
            rows: [
              ["Every sprint (2 weeks)", "Users see changes every 2 weeks; course corrections are cheap", "Minimal — errors caught in the next sprint"],
              ["Monthly", "Feedback arrives 4+ weeks late; moderate rework cost", "Moderate — a month's work may need rethinking"],
              ["Quarterly", "3 months of assumptions before any real-world validation", "High — expensive to reverse a quarter's development"],
              ["Semi-annual / annual", "Teams are building based on 6-month-old requirements", "Very high — effectively waterfall with agile ceremonies"],
            ],
          },
        },
        {
          type: "bullets",
          items: [
            "Aim to release (or at minimum demo working software) at the end of every sprint.",
            "Use feature flags to deploy code without releasing features — decouple deployment from release.",
            "If releasing every sprint is not possible, identify and remove the specific bottleneck (manual QA, change approvals, etc.).",
            "Even an internal demo to stakeholders at the end of every sprint is far better than a quarterly release.",
          ],
        },
        {
          type: "subheading",
          text: "Avoiding Stakeholders",
        },
        {
          type: "paragraph",
          text: "Sprint reviews are designed to bring real stakeholders — customers, users, business owners — into the feedback loop. When teams skip this or invite only internal team members, they lose the most important input: whether the software actually solves the problem.",
        },
        {
          type: "bullets",
          items: [
            "Sprint reviews should include stakeholders who can say 'yes, this is what we needed' or 'no, we need to pivot.'",
            "Avoiding stakeholders usually means the team is anxious about criticism — that anxiety is data worth addressing.",
            "Stakeholders who are excluded from reviews fill the vacuum with status meetings, emails, and ad-hoc requests.",
            "The product owner should personally invite the right stakeholders to each sprint review.",
            "Stakeholder avoidance is often a symptom of over-promising in Chapter 1 — teams avoid showing what they actually built.",
          ],
        },
        {
          type: "subheading",
          text: "Missing Feedback",
        },
        {
          type: "paragraph",
          text: "Running retrospectives without acting on the findings is worse than not running them at all. It tells the team that identifying problems doesn't matter because nothing will change. Retrospectives without follow-through destroy psychological safety.",
        },
        {
          type: "table",
          table: {
            headers: ["Feedback failure", "Fix"],
            rows: [
              ["Retro action items never get assigned or tracked", "Create a Jira story for each retro action item with an owner and a due date"],
              ["Same problems appear in every retro", "Check whether last sprint's action items were actually done before starting the new retro"],
              ["Only the Scrum Master participates actively", "Structured formats (Start/Stop/Continue, 4Ls, Mad/Sad/Glad) draw in quieter team members"],
              ["Stakeholder feedback from sprint review is ignored", "PO adds it to the backlog, estimates it, and prioritises it — not optional"],
              ["Team says 'everything was fine' every sprint", "Introduce anonymous feedback tools (Mentimeter, EasyRetro) to surface honest opinions"],
            ],
          },
        },
        {
          type: "ui-hint",
          text: "Jira tip for retro action tracking: create a label 'retro-action' and apply it to all stories that come from retrospectives. Then use this JQL to check if last sprint's retro actions were completed: labels = \"retro-action\" AND sprint in closedSprints() AND status != Done",
        },
        {
          type: "code",
          code: {
            label: "JQL: track retro action items across sprints",
            lines: [
              "-- Open retro actions (should be empty by end of sprint)",
              "labels = \"retro-action\"",
              "AND status != Done",
              "ORDER BY created ASC",
              "",
              "-- Closed retro actions from last sprint (retrospective evidence)",
              "labels = \"retro-action\"",
              "AND sprint in closedSprints()",
              "AND status = Done",
              "ORDER BY updated DESC",
            ],
          },
        },
      ],
      keyPoints: [
        { label: "Plan every sprint", value: "Sprint planning creates the shared goal that enables every decision the team makes for the next two weeks." },
        { label: "Release per sprint", value: "Long release cycles defeat the purpose of agile. Aim for every sprint; use feature flags if needed." },
        { label: "Invite real stakeholders", value: "Sprint reviews without stakeholders are just team demos — valuable, but missing the most important feedback." },
        { label: "Close the loop", value: "Retro action items must become Jira stories with owners. Unacted feedback destroys trust in the process." },
      ],
    },
    {
      id: "ma-ch5",
      number: "Chapter 5",
      title: "Mistakes When Making Improvements",
      summary: "How over-ambitious improvement initiatives, metric avoidance, complacency, and overlooked hand-offs prevent teams from actually getting better.",
      content: [
        {
          type: "subheading",
          text: "Starting Too Large",
        },
        {
          type: "paragraph",
          text: "Retrospective action items that are too large to complete in one sprint never get done. 'Improve our entire CI/CD pipeline' is not a retro action — it's a project. The same applies to agile transformation initiatives: starting with a company-wide simultaneous rollout almost always fails.",
        },
        {
          type: "table",
          table: {
            headers: ["Too large (fails)", "Right size (works)"],
            rows: [
              ["'Implement automated testing across all services'", "'Add unit tests for the auth module this sprint — target 80% coverage'"],
              ["'Transform all 12 teams to agile simultaneously'", "'Pilot agile with one team for two sprints; review and expand'"],
              ["'Rewrite our entire deployment process'", "'Automate one manual deployment step this sprint'"],
              ["'Fix all technical debt'", "'Allocate 20% of each sprint capacity to paying down the top 3 tech debt items'"],
            ],
          },
        },
        {
          type: "bullets",
          items: [
            "Apply the same story-sizing discipline to improvement work as to product work: can it be done in one sprint?",
            "If the improvement is large, break it into an epic with child stories, one per sprint.",
            "Celebrate small improvement wins visibly — it builds momentum for the next improvement.",
            "The agile principle of 'sustainable pace' applies to improvement work too — don't pile up technical debt repayment on top of a full sprint.",
          ],
        },
        {
          type: "subheading",
          text: "Avoiding Metrics",
        },
        {
          type: "paragraph",
          text: "Teams that don't measure their performance can't improve it. Common reasons for avoiding metrics: fear that they'll be used to blame individuals, belief that 'we know we're getting better', or uncertainty about which metrics matter.",
        },
        {
          type: "table",
          table: {
            headers: ["Metric", "What it tells you", "Jira / dashboard access"],
            rows: [
              ["Velocity", "Story points completed per sprint — trend reveals if the team is growing or stuck", "Board → Reports → Velocity Chart"],
              ["Sprint goal completion rate", "% of sprints where the sprint goal was met — measures predictability", "Manual: count completed goals vs total sprints"],
              ["Cycle time", "Time from 'In Progress' to 'Done' — shorter and more consistent = better flow", "Board → Reports → Control Chart (Jira Premium) or export to CSV"],
              ["Defect escape rate", "Bugs found in production vs in QA — low escape rate = quality discipline", "JQL: issuetype = Bug AND labels = \"production\""],
              ["Impediment count", "Number of blockers raised per sprint — a proxy for systemic friction", "JQL: labels = \"impediment\" AND sprint in closedSprints()"],
              ["Retro action completion", "% of retro actions completed each sprint — measures improvement follow-through", "JQL: labels = \"retro-action\" AND sprint in closedSprints() AND status = Done"],
            ],
          },
        },
        {
          type: "note",
          text: "Use metrics to improve the system, not to evaluate individuals. Velocity is a team metric. Posting individual story point counts on a dashboard destroys collaboration and incentivises story point inflation.",
        },
        {
          type: "subheading",
          text: "Sitting Still",
        },
        {
          type: "paragraph",
          text: "Once a team reaches a comfortable rhythm, the temptation is to stop experimenting. 'We're stable' becomes an excuse to avoid the discomfort of change. This is the antithesis of the agile principle: 'at regular intervals, the team reflects on how to become more effective, then tunes and adjusts its behaviour accordingly.'",
        },
        {
          type: "bullets",
          items: [
            "After 6 months of stable velocity, deliberately challenge the process: try mob programming for one sprint, change the retro format, experiment with a shorter sprint.",
            "Introduce a 'what if we tried...' item on every retro agenda to keep the improvement mindset alive.",
            "Stability is a plateau, not a destination. A team that delivered 30 points per sprint a year ago should be asking why they're still at 30.",
            "Use the velocity trend chart to check for flatness — a flat velocity line over 6+ sprints is a signal to investigate.",
          ],
        },
        {
          type: "subheading",
          text: "Overlooking Handoffs",
        },
        {
          type: "paragraph",
          text: "Handoffs — moments where work passes from one person, team, or system to another — are the biggest source of waste and delay in otherwise agile organisations. Dev → QA, QA → UAT, UAT → Ops: each handoff is a queue where work waits.",
        },
        {
          type: "table",
          table: {
            headers: ["Handoff type", "Typical waste", "Agile fix"],
            rows: [
              ["Dev → QA", "QA queue causes issues to sit untested for days after dev is done", "Embed QA in the team; devs write automated tests; QA and dev pair on stories"],
              ["Feature → Documentation", "Docs written weeks after code merges; already inaccurate", "Definition of Done includes documentation updated before closing the story"],
              ["Sprint Done → Production", "Deployment queue caused by manual release process or change board", "Automate deployment pipeline; move to continuous delivery"],
              ["Team A → Team B (dependency)", "Team B work blocked waiting for Team A's output", "Identify inter-team dependencies in sprint planning; use Jira issue links to track"],
            ],
          },
        },
        {
          type: "code",
          code: {
            label: "JQL: find issues that have been 'Done' in dev but are stuck waiting for QA/deployment",
            lines: [
              "status = \"Done\"",
              "AND labels != \"deployed\"",
              "AND updated <= -5d",
              "AND project = \"MYPROJECT\"",
              "ORDER BY updated ASC",
            ],
          },
        },
      ],
      keyPoints: [
        { label: "Size improvements like stories", value: "If a retro action can't be done in one sprint, break it down. Small wins build momentum." },
        { label: "Measure to improve", value: "Pick 3–4 team-level metrics (velocity, cycle time, defect rate, retro completion). Review them every retro." },
        { label: "Comfort = stagnation", value: "A stable team that isn't improving is actually declining relative to its potential." },
        { label: "Map your handoffs", value: "Draw the value stream from 'story started' to 'feature in production' — every wait is a handoff to eliminate." },
      ],
    },
    {
      id: "ma-ch6",
      number: "Chapter 6",
      title: "Mistakes When Managing Work",
      summary: "How unclear priorities, starting too much at once, and mid-sprint scope additions undermine flow, predictability, and team trust.",
      content: [
        {
          type: "subheading",
          text: "Unclear Priorities",
        },
        {
          type: "paragraph",
          text: "When everything is marked as high priority, the team has no way to decide what to work on first. The result is paralysis, context-switching, and work that starts but never finishes. The product owner's single most important job is maintaining an ordered backlog where the top item is always the most valuable thing the team could work on.",
        },
        {
          type: "table",
          table: {
            headers: ["Priority anti-pattern", "What happens", "Fix"],
            rows: [
              ["All 50 backlog items marked 'Highest' priority", "Team works on whatever is most recent or from the loudest stakeholder", "PO re-ranks backlog — only 1–3 items can be 'Highest' at any time"],
              ["Multiple stakeholders all claim their items are #1", "Team gets conflicting direction mid-sprint", "PO is the single decision-maker on backlog order; stakeholders feed into the PO, not the team directly"],
              ["Priority field never updated after initial estimate", "Old medium-priority items block new critical work", "Review and reorder backlog every sprint planning and every refinement session"],
            ],
          },
        },
        {
          type: "code",
          code: {
            label: "JQL: audit priority inflation (too many Highest items)",
            lines: [
              "project = \"MYPROJECT\"",
              "AND priority = Highest",
              "AND status != Done",
              "ORDER BY created ASC",
              "",
              "-- If this returns more than 3 items, priorities need rebalancing.",
              "-- Healthy priority distribution should look like a pyramid:",
              "--   Highest: 1–3 items",
              "--   High:    5–10 items",
              "--   Medium:  rest of the sprint/backlog",
              "--   Low:     items deferred beyond next 2 sprints",
            ],
          },
        },
        {
          type: "subheading",
          text: "Finishing vs. Starting",
        },
        {
          type: "paragraph",
          text: "One of the most common agile mistakes is starting many items simultaneously and finishing few. High work-in-progress (WIP) creates context-switching overhead, extends cycle time, and makes sprint goals harder to meet. The Kanban principle 'stop starting, start finishing' captures the fix.",
        },
        {
          type: "bullets",
          items: [
            "Each developer should have at most 1–2 items In Progress at any time. More than 2 = too much WIP.",
            "If you're blocked on item A, pull it to a 'Blocked' column and pick up item B — but finish B before starting C.",
            "Sprint reviews with 80% of stories half-done are worse than reviews with 50% of stories fully done.",
            "WIP limits on the Jira board enforce the habit: set In Progress column WIP = number of team members.",
            "The cost of context-switching: studies suggest each switch costs 15–20 minutes of refocus time. 5 switches per day = 90 minutes of lost productivity.",
          ],
        },
        {
          type: "code",
          code: {
            label: "JQL: identify developers with too many concurrent in-progress items",
            lines: [
              "status = \"In Progress\"",
              "AND project = \"MYPROJECT\"",
              "AND sprint in openSprints()",
              "ORDER BY assignee ASC",
              "",
              "-- Review results: if any assignee appears more than twice,",
              "-- they have too much WIP. Have them finish one item before",
              "-- starting another.",
            ],
          },
        },
        {
          type: "ui-hint",
          text: "Jira WIP limit: Board → top-right ⋯ → Board settings → Columns → click a column → set the Max column constraint. Jira will highlight the column in orange/red when the limit is exceeded, making the problem impossible to ignore.",
        },
        {
          type: "subheading",
          text: "Adding Work",
        },
        {
          type: "paragraph",
          text: "Mid-sprint scope additions — requests that arrive after sprint planning and get pulled into the current sprint without removing anything — are one of the most corrosive habits in agile teams. They make the sprint goal meaningless, velocity unpredictable, and the team feel perpetually overwhelmed.",
        },
        {
          type: "table",
          table: {
            headers: ["Scenario", "Wrong response", "Right response"],
            rows: [
              ["Stakeholder asks for a new feature mid-sprint", "Add it to the sprint 'because it's small'", "Add it to the backlog. PO prioritises it. Team picks it up next sprint."],
              ["Critical production bug reported mid-sprint", "Ignore the sprint; just fix it", "Use the expedite lane (WIP limit 1). Remove a story of equivalent size from the sprint with PO approval."],
              ["Manager adds a 'quick report' to the sprint", "Team quietly absorbs it", "PO declines: 'Add it to the backlog. I'll prioritise it against current work and it comes in next sprint.'"],
              ["Dev finishes early and is asked to start something new", "'Since you have time, start PROJ-99 too'", "Dev pulls the next item from the sprint backlog (already planned). If nothing left, contribute to a teammate's story."],
            ],
          },
        },
        {
          type: "note",
          text: "Protecting the sprint is the product owner's responsibility, not the Scrum Master's. The PO owns the backlog and is the first line of defence against mid-sprint additions. The Scrum Master coaches the PO on how to push back.",
        },
        {
          type: "subheading",
          text: "The Full Picture: Managing Work Well",
        },
        {
          type: "bullets",
          items: [
            "Single ordered backlog: one list, one owner (PO), clear priority. No parallel backlogs per team member.",
            "WIP limits: In Progress column max = team size. Finish before starting.",
            "Expedite lane: a separate column with WIP limit of 1 for genuine urgencies only.",
            "Sprint lock: after planning ends, the sprint scope is locked. Changes require PO approval and a size-for-size swap.",
            "Velocity as a forecasting tool: after 5+ sprints, use average velocity to tell stakeholders when items will realistically reach the sprint.",
          ],
        },
        {
          type: "code",
          code: {
            label: "JQL: find work added mid-sprint (created after sprint started)",
            lines: [
              "project = \"MYPROJECT\"",
              "AND sprint in openSprints()",
              "AND created >= startOfWeek()",
              "AND issuetype != Sub-task",
              "ORDER BY created DESC",
              "",
              "-- Review these in the retro.",
              "-- If there are more than 1–2, the sprint is not being protected.",
            ],
          },
        },
      ],
      keyPoints: [
        { label: "One priority order", value: "The backlog is a single ordered list — the PO decides the order, not the loudest stakeholder." },
        { label: "Stop starting, start finishing", value: "High WIP = low throughput. Set WIP limits on the Jira board and enforce them." },
        { label: "Protect the sprint", value: "Mid-sprint additions go to the backlog. Only P1 emergencies enter via the expedite lane (WIP limit 1)." },
        { label: "Track additions with JQL", value: "Use 'created >= startOfWeek() AND sprint in openSprints()' to surface unplanned mid-sprint work in the retro." },
      ],
    },
  ],
};

/* ─────────────────── COMPONENTS ─────────────────── */

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="m19 9-7 7-7-7" />
    </svg>
  );
}

function ChevronUp({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="m5 15 7-7 7 7" />
    </svg>
  );
}

function ContentBlock({ block }: { block: ChapterContent }) {
  switch (block.type) {
    case "paragraph":
      return <p className="text-gray-700 leading-relaxed mb-4">{block.text}</p>;

    case "subheading":
      return (
        <h3 className="text-lg font-bold text-gray-900 mt-6 mb-3 first:mt-0">
          {block.text}
        </h3>
      );

    case "note":
      return (
        <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-500 my-4 text-sm leading-relaxed">
          {block.text}
        </blockquote>
      );

    case "bullets":
      return (
        <ul className="list-disc list-inside space-y-2 mb-4 text-gray-700">
          {block.items?.map((item, i) => (
            <li key={i} className="leading-relaxed pl-2">
              {item}
            </li>
          ))}
        </ul>
      );

    case "numbered":
      return (
        <ol className="list-decimal list-inside space-y-2 mb-4 text-gray-700">
          {block.items?.map((item, i) => (
            <li key={i} className="leading-relaxed pl-2">
              {item}
            </li>
          ))}
        </ol>
      );

    case "table":
      if (!block.table) return null;
      return (
        <div className="mb-4 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr>
                {block.table.headers.map((h, i) => (
                  <th
                    key={i}
                    className="border border-gray-300 px-3 py-2 bg-gray-50 text-left font-semibold text-gray-800"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.table.rows.map((row, ri) => (
                <tr key={ri} className={ri % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                  {row.map((cell, ci) => (
                    <td
                      key={ci}
                      className="border border-gray-300 px-3 py-2 text-gray-700 align-top"
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          {block.table.note && (
            <p className="text-xs text-gray-500 italic mt-1 pl-1">{block.table.note}</p>
          )}
        </div>
      );

    case "code":
      return (
        <div className="mb-4">
          {block.code?.label && (
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1">{block.code.label}</p>
          )}
          <pre className="bg-gray-900 text-green-400 rounded-lg px-4 py-3 overflow-x-auto text-sm leading-relaxed font-mono">
            {block.code?.lines.join("\n")}
          </pre>
        </div>
      );

    case "ui-hint":
      return (
        <div className="mb-4 bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 flex gap-3">
          <span className="text-amber-500 text-lg shrink-0">🖱️</span>
          <p className="text-sm text-amber-800 leading-relaxed">{block.text}</p>
        </div>
      );

    default:
      return null;
  }
}

function ChapterCard({ chapter }: { chapter: Chapter }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden mb-4 shadow-sm">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 bg-white hover:bg-gray-50 transition-colors text-left"
      >
        <div className="flex items-center gap-3">
          <span className="text-xs font-semibold uppercase tracking-wide text-gray-400 w-20 shrink-0">
            {chapter.number}
          </span>
          <span className="font-semibold text-gray-900">{chapter.title}</span>
        </div>
        {open ? (
          <ChevronUp className="w-5 h-5 text-gray-400 shrink-0 ml-4" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-400 shrink-0 ml-4" />
        )}
      </button>

      {open && (
        <div className="px-5 pb-6 pt-4 bg-white border-t border-gray-100">
          <p className="text-sm text-gray-500 italic mb-5">{chapter.summary}</p>

          <div>
            {chapter.content.map((block, i) => (
              <ContentBlock key={i} block={block} />
            ))}
          </div>

          {chapter.keyPoints && chapter.keyPoints.length > 0 && (
            <div className="mt-6 rounded-lg bg-blue-50 border border-blue-100 p-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-blue-700 mb-3">
                Key Takeaways
              </h4>
              <div className="space-y-2">
                {chapter.keyPoints.map((kp, i) => (
                  <div key={i} className="flex gap-2 text-sm">
                    <span className="font-semibold text-blue-800 shrink-0">{kp.label}:</span>
                    <span className="text-blue-700">{kp.value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function CourseTab({ course }: { course: Course }) {
  return (
    <div>
      <p className="text-sm text-gray-500 mb-6">{course.subtitle}</p>
      <hr className="mb-6 border-gray-200" />
      {course.chapters.map((chapter) => (
        <ChapterCard key={chapter.id} chapter={chapter} />
      ))}
    </div>
  );
}

/* ─────────────────── PAGE ─────────────────── */

const TABS = [
  { id: "agile-fundamentals", label: "Agile Fundamentals", course: agileFundamentals },
  { id: "scrum-basics", label: "Scrum: The Basics", course: scrumBasics },
  { id: "jira-cloud", label: "Jira Cloud", course: jiraCloud },
  { id: "jira-search", label: "Jira Search & JQL", course: jiraSearch },
  { id: "advanced-jira", label: "Advanced Jira Cloud", course: advancedJira },
  { id: "mistakes-to-avoid", label: "Mistakes to Avoid", course: mistakesToAvoid },
];

function HamburgerIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
    </svg>
  );
}

export default function Home() {
  const [activeTab, setActiveTab] = useState("agile-fundamentals");
  const [menuOpen, setMenuOpen] = useState(false);
  const current = TABS.find((t) => t.id === activeTab)!;

  function switchTab(id: string) {
    setActiveTab(id);
    setMenuOpen(false);
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">

        {/* Header */}
        <div className="flex items-start justify-between mb-6 gap-4">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 flex items-center gap-3">
              <span>📋</span>
              Agile Notes
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              Study notes from LinkedIn Learning
            </p>
          </div>

          {/* Hamburger button — visible on all sizes */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="shrink-0 mt-1 p-2 rounded-lg border border-gray-200 bg-white shadow-sm text-gray-600 hover:bg-gray-50 transition-colors"
          >
            {menuOpen ? <CloseIcon /> : <HamburgerIcon />}
          </button>
        </div>

        {/* Mobile / Hamburger dropdown menu */}
        {menuOpen && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 z-30 bg-black/30"
              onClick={() => setMenuOpen(false)}
            />
            {/* Drawer */}
            <div className="fixed top-0 right-0 z-40 h-full w-72 bg-white shadow-2xl flex flex-col">
              <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
                <span className="font-bold text-gray-900 text-sm uppercase tracking-wide">Courses</span>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="p-1 text-gray-400 hover:text-gray-700"
                  aria-label="Close menu"
                >
                  <CloseIcon />
                </button>
              </div>
              <nav className="flex-1 overflow-y-auto py-2">
                {TABS.map((tab, i) => (
                  <button
                    key={tab.id}
                    onClick={() => switchTab(tab.id)}
                    className={`w-full text-left px-5 py-4 text-sm font-medium transition-colors flex items-center gap-3 ${
                      activeTab === tab.id
                        ? "bg-red-50 text-red-600 border-r-4 border-red-500"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                      activeTab === tab.id ? "bg-red-500 text-white" : "bg-gray-100 text-gray-500"
                    }`}>
                      {i + 1}
                    </span>
                    {tab.label}
                  </button>
                ))}
              </nav>
            </div>
          </>
        )}

        {/* Current tab pill — shows active tab name on mobile */}
        <div className="flex items-center gap-2 mb-6 sm:hidden">
          <span className="text-xs font-semibold uppercase tracking-wide text-gray-400">Viewing:</span>
          <span className="bg-red-100 text-red-700 text-xs font-semibold px-3 py-1 rounded-full">
            {current.label}
          </span>
        </div>

        {/* Desktop tab bar — hidden on small screens */}
        <div className="hidden sm:block border-b border-gray-200 mb-8">
          <nav className="flex flex-wrap gap-0" aria-label="Tabs">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                  activeTab === tab.id
                    ? "border-red-500 text-red-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Active Tab Content */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{current.course.title}</h2>
          <CourseTab course={current.course} />
        </div>

      </div>
    </div>
  );
}
