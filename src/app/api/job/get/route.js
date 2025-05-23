import { APIError, APIResponse } from "@/server/lib/apiResponse";
import { requestHandler } from "@/server/middleware/requestHandler";
import Job from "@/server/models/job.model";

const getJobs = async (req) => {
  const jobs = await Job.find().sort({ createdAt: -1 }); // Sort by createdAt in descending order

  if (jobs.length === 0) {
    return new APIError("No jobs found", 404);
  }

  return new APIResponse({ jobs }, "Jobs fetched successfully", 200);
};

export const GET = requestHandler(getJobs); // Use the request handler for GET requests
