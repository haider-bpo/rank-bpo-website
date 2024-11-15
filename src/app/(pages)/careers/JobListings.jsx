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

const jobs = [
  {
    title: "Head of Global Sales",
    postedDate: "Posted 3 days ago",
    locationType: "On-site",
    location: "Lahore, Punjab, Pakistan",
    department: "Global Marketing and Business Development",
    employmentType: "Full time",
  },
  {
    title: "Associate Software Engineer- JAVA",
    postedDate: "Posted 3 days ago",
    locationType: "On-site",
    location: "Lahore, Punjab, Pakistan",
    department: "Cluster Head",
    employmentType: "Full time",
  },
  {
    title: "Associate Software Engineer- Python",
    postedDate: "Posted 3 days ago",
    locationType: "On-site",
    location: "Islamabad, Islamabad Capital Territory, Pakistan",
    department: "Cluster Head",
    employmentType: "Full time",
  },
  {
    title: "2D UI/UX Designer",
    postedDate: "Posted 3 days ago",
    locationType: "On-site",
    location: "Lahore, Punjab, Pakistan",
    department: "Cluster Head",
    employmentType: "Full time",
  },
  {
    title: "Associate Software Engineer- Python React",
    postedDate: "Posted 7 days ago",
    locationType: "On-site",
    location: "Lahore, Punjab, Pakistan",
    department: "Cluster Head",
    employmentType: "Full time",
  },
  {
    title: "Software Engineer (AI/ML)",
    postedDate: "Posted 7 days ago",
    locationType: "On-site",
    location: "Lahore, Punjab, Pakistan",
    department: "Cluster Head",
    employmentType: "Full time",
  },
];

function JobListings() {
  return (
    <div className=" py-10">
      {jobs.length > 0 ? (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[250px]">Job Title</TableHead>
              {/* <TableHead>Posted</TableHead> */}
              <TableHead>Type</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Department</TableHead>
              <TableHead>Employment</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {jobs.map((job, index) => (
              <TableRow
                key={index}
                className={`${index % 2 === 0 ? "bg-muted/50" : ""}`}
              >
                <TableCell className="font-medium text-[#00bbea]">
                  {job.title}
                </TableCell>
                {/* <TableCell>{job.postedDate}</TableCell> */}
                <TableCell>{job.locationType}</TableCell>
                <TableCell>{job.location}</TableCell>
                <TableCell>{job.department}</TableCell>
                <TableCell>{job.employmentType}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <Alert>
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>No Jobs Available</AlertTitle>
          <AlertDescription>
            We currently don't have any open positions. Please check back later
            for new opportunities.
          </AlertDescription>
        </Alert>
      )}
    </div>
  );
}

export default JobListings;
