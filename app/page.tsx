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
  type: "paragraph" | "bullets" | "numbered" | "table" | "note" | "subheading";
  text?: string;
  items?: string[];
  table?: TableData;
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
];

export default function Home() {
  const [activeTab, setActiveTab] = useState("agile-fundamentals");
  const current = TABS.find((t) => t.id === activeTab)!;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-10">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-4xl font-bold text-gray-900 flex items-center gap-3">
            <span>📋</span>
            Agile Notes
          </h1>
          <p className="text-sm text-gray-500 mt-2">
            Study notes from LinkedIn Learning — Agile Foundations and Scrum: The Basics
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="flex gap-0" aria-label="Tabs">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-3 text-sm font-medium border-b-2 transition-colors ${
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
