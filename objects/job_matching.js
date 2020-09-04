// 8kyu

// Let's build a matchmaking system that helps discover jobs for developers based on a number of factors.

// Let's give this a try. We'll create a function match which takes a candidate and a job, which will either return a boolean indicating whether the job is a valid match for the candidate.

// A candidate will have a minimum salary:

// let candidate = {
//   minSalary: 120000
// }

// A job will have a maximum salary:

// let job = {
//   maxSalary: 140000
// }
// If either the candidate's minimum salary or the job's maximum salary is not present, throw an error.

// For a valid match, the candidate's minimum salary must be less than or equal to the job's maximum salary. However, let's also include 10% wiggle room (deducted from the candidate's minimum salary) in case the candidate is a rockstar who enjoys programming on Codewars in their spare time. The company offering the job may be able to work something out.

const match = (candidate, job) => {
  if (!job.maxSalary || !candidate.minSalary) throw 'Missing salary';
  return candidate.minSalary * 0.9 <= job.maxSalary;
}

let candidate1 = { minSalary: 120000 },
    job1 = { },
    job2 = { maxSalary: 80000 };

console.log(match(candidate1, job1));
console.log(match(candidate1, job2));
