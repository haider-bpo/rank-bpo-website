"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import { ViewJobDetail } from "./view-job-detail";
import { useEffect, useState } from "react";
import axios from "axios";

function JobListings() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      const res = await axios.get("/api/job/get");
      const { jobs } = res?.data?.data;
      console.log("data: ", res?.data);
      setJobs(() => jobs);
    };

    fetchJobs();
  }, []);

  return (
    <div className=" py-10">
      {jobs && jobs.length > 0 ? (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[250px]">Title</TableHead>
              <TableHead>Department</TableHead>
              <TableHead>Employment</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Description</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {jobs.map((job, index) => (
              <TableRow
                key={index}
                className={`${index % 2 === 0 ? "bg-muted/50" : ""}`}
              >
                <TableCell className="font-medium text-[#00bbea] capitalize">
                  {job.title}
                </TableCell>
                <TableCell className="capitalize">{job?.department?.replace('-', ' ')}</TableCell>
                <TableCell>{job.employment}</TableCell>
                <TableCell>{job.location}</TableCell>
                <TableCell>{job.type}</TableCell>
                <TableCell>
                  <ViewJobDetail job={job} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <Alert>
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>No Jobs Available</AlertTitle>
          <AlertDescription>
            We currently does not have any open positions. Please check back
            later for new opportunities.
          </AlertDescription>
        </Alert>
      )}
    </div>
  );
}

export default JobListings;
