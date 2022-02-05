//https://www.codewars.com/kata/56c22c5ae8b139416c00175d/train/javascript
function match(candidate, job) {
   if (!job.maxSalary || !candidate.minSalary) throw "Error!";
   candidate.minSalary - candidate.minSalary / 10 <= job.maxSalary
      ? true
      : false;
}

//https://www.codewars.com/kata/56c2578be8b139bd5c001bd8/train/javascript
function match(job, candidates) {
   return candidates.filter(
      (candidate) =>
         (job.equityMax > 0 || !candidate.desiresEquity) &&
         job.locations.some(
            (location) =>
               candidate.currentLocation === location ||
               candidate.desiredLocations.includes(location)
         )
   );
}
