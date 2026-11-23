
interface ExecutionResult {
  status: "OK" | "COMPILE_ERROR" | "RUNTIME_ERROR" | "API_ERROR";
  stdout: string;
  stderr: string;
}

export const executeCode = async ( code: string, stdinInput: string, timeLimitMs: number ): Promise<ExecutionResult> => {

  const apiUrl = process.env.JUDGE0_API_URL || "";
  const apiKey = process.env.JUDGE0_API_KEY || "";
  const apiHost = process.env.JUDGE0_API_HOST || "";

  const endpoint = `${apiUrl}/submissions?base64_encoded=false&wait=true`;

  const payload = {
    source_code: code,
    language_id: 54, 
    stdin: stdinInput,
    cpu_time_limit: timeLimitMs / 1000,
  };

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    "X-RapidAPI-Key": apiKey,
    "X-RapidAPI-Host": apiHost,
  };

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`Judge0 HTTP Error: ${response.status}`);
    }

    const data = await response.json();
    const statusId = data.status.id;

    if (statusId === 6) {
      return {
        status: "COMPILE_ERROR",
        stdout: "",
        stderr: data.compile_output || "Compilation failed",
      };
    }

    if (statusId === 5) {
      return {
        status: "RUNTIME_ERROR",
        stdout: "",
        stderr: "Time Limit Exceeded",
      };
    }

    if (statusId >= 7) {
      return {
        status: "RUNTIME_ERROR",
        stdout: data.stdout || "",
        stderr: data.stderr || data.status.description,
      };
    }

    return {
      status: "OK",
      stdout: data.stdout || "",
      stderr: "",
    };
  } catch (err: any) {
    console.error("Judge0 Execution Failed:", err);
    return {
      status: "API_ERROR",
      stdout: "",
      stderr: "Execution server error",
    };
  }
};