import fs from "fs";
import path from "path";

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

export interface TestCase {
  input: string;
  expectedOutput: string;
}

const questionPath = path.join(process.cwd(), "data", "questions.json");
const testCasesPath = path.join(process.cwd(), "data", "testcases.json");

export const questions = JSON.parse(fs.readFileSync(questionPath, "utf-8")) as Problem[];
export const testcases = JSON.parse(fs.readFileSync(testCasesPath, "utf-8")) as Record<string, TestCase[]>;

export const getProblemBySlug = (slug: string): Problem | undefined => {
  const cleanSlug = slug.trim().toLowerCase();
  return questions.find((q) => q.slug === cleanSlug);
};

export const getRandomProblem = (difficulty: string): Problem | undefined => {
  const list = questions.filter((q) => q.difficulty === difficulty.toLowerCase());
  if (list.length === 0) return undefined;
  return list[Math.floor(Math.random() * list.length)];
};

export const getTestCases = (id: number): TestCase[] => {
  return testcases[String(id)] ?? [];
};