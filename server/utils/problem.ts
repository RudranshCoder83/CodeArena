import fs from "fs";
import path from "path";

// Structure of a coding problem sent to the client
export interface Problem {
  id: number;
  title: string;
  slug: string;
  difficulty: "easy" | "medium" | "hard";
  description: string;
  examples: { input: string; output: string; explanation?: string }[];
  constraints: string[];
  starterCode: string;
  timeLimitMs: number;
}

// Structure of a hidden test case used for backend code evaluation
export interface TestCase {
  input: string;
  expectedOutput: string;
}

// Resolve file paths relative to the server root directory
const questionPath = path.join(process.cwd(), "data", "questions.json");
const testCasesPath = path.join(process.cwd(), "data", "testcases.json");

// Load and parse problems and hidden test cases into memory at startup
export const questions = JSON.parse(fs.readFileSync(questionPath, "utf-8")) as Problem[];
export const testcases = JSON.parse(fs.readFileSync(testCasesPath, "utf-8")) as Record<string, TestCase[]>;

// Find and return a single problem matching the given URL slug
export const getProblemBySlug = (slug: string): Problem | undefined => {
  const cleanSlug = slug.trim().toLowerCase();
  return questions.find((q) => q.slug === cleanSlug);
};

// Filter problems by difficulty and pick one at random for a 1v1 duel
export const getRandomProblem = (difficulty: string): Problem | undefined => {
  const list = questions.filter((q) => q.difficulty === difficulty.toLowerCase());
  if (list.length === 0) return undefined;
  return list[Math.floor(Math.random() * list.length)];
};

// Retrieve hidden test cases for a problem by its numeric ID
export const getTestCases = (id: number): TestCase[] => {
  return testcases[String(id)] ?? [];
};