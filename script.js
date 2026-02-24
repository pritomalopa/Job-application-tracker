const jobs = [
  {
    id: 1,
    companyName: "Mobile First Corp",
    position: "React Native Developer",
    location: "Remote",
    type: "Full-time",
    salary: "$130,000 - $175,000",
    description: "Build cross-platform mobile applications using React Native for global users.",
    status: "all"
  },
  {
    id: 2,
    companyName: "WebFlow Agency",
    position: "Web Designer & Developer",
    location: "Los Angeles, CA",
    type: "Part-time",
    salary: "$80,000 - $120,000",
    description: "Design and develop modern web experiences for high-profile clients.",
    status: "all"
  },
  {
    id: 3,
    companyName: "TechNova",
    position: "Frontend Engineer",
    location: "New York, NY",
    type: "Full-time",
    salary: "$110,000 - $150,000",
    description: "Develop scalable user interfaces using modern JavaScript frameworks.",
    status: "all"
  },
  {
    id: 4,
    companyName: "CloudSync",
    position: "Backend Developer",
    location: "Remote",
    type: "Contract",
    salary: "$100,000 - $140,000",
    description: "Build APIs and microservices for cloud-based applications.",
    status: "all"
  },
  {
    id: 5,
    companyName: "DataSphere",
    position: "Data Analyst",
    location: "Chicago, IL",
    type: "Full-time",
    salary: "$90,000 - $120,000",
    description: "Analyze large datasets and provide actionable business insights.",
    status: "all"
  },
  {
    id: 6,
    companyName: "NextGen Solutions",
    position: "UI/UX Designer",
    location: "Austin, TX",
    type: "Full-time",
    salary: "$85,000 - $110,000",
    description: "Design intuitive and engaging user experiences for web and mobile.",
    status: "all"
  },
  {
    id: 7,
    companyName: "SecureNet",
    position: "Cybersecurity Engineer",
    location: "Washington, DC",
    type: "Full-time",
    salary: "$120,000 - $160,000",
    description: "Protect enterprise systems from cyber threats and vulnerabilities.",
    status: "all"
  },
  {
    id: 8,
    companyName: "AI Labs",
    position: "Machine Learning Engineer",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$140,000 - $190,000",
    description: "Develop and deploy machine learning models at scale.",
    status: "all"
  }
];

let currentTab = "all";

const jobContainer = document.getElementById("jobContainer");
const emptyState = document.getElementById("emptyState");
const totalCount = document.getElementById("totalCount");
const interviewCount = document.getElementById("interviewCount");
const rejectedCount = document.getElementById("rejectedCount");
const tabCount = document.getElementById("tabCount");

function renderJobs() {
  jobContainer.innerHTML = "";

  const filtered = jobs.filter(job =>
    currentTab === "all" ? true : job.status === currentTab
  );

  tabCount.innerText = `${filtered.length} jobs`;

  if (filtered.length === 0) {
    emptyState.classList.remove("hidden");
  } else {
    emptyState.classList.add("hidden");
  }

  filtered.forEach(job => {
    const card = document.createElement("div");
    card.className = "bg-white p-5 rounded shadow relative";

    card.innerHTML = `
      <div class="flex justify-between">
        <div>
          <h3 class="font-semibold text-blue-900">${job.companyName}</h3>
          <p class="text-sm font-medium">${job.position}</p>
          <p class="text-sm text-gray-500">${job.location} • ${job.type} • ${job.salary}</p>
          <p class="text-sm mt-2 text-gray-600">${job.description}</p>
        </div>
   <button onclick="deleteJob(${job.id})"
  class="absolute top-4 right-4 p-2 rounded hover:bg-gray-100">
  <img src="assets/delete.png"
       class="w-6 h-6 opacity-70 hover:opacity-100">
</button>
      </div>

      <div class="mt-4 flex gap-2">
        <button onclick="updateStatus(${job.id}, 'interview')"
          class="px-3 py-1 border rounded text-green-600 border-green-600">
          Interview
        </button>

        <button onclick="updateStatus(${job.id}, 'rejected')"
          class="px-3 py-1 border rounded text-red-600 border-red-600">
          Rejected
        </button>
      </div>
    `;

    jobContainer.appendChild(card);
  });

  updateDashboard();
}

function updateStatus(id, status) {
  const job = jobs.find(j => j.id === id);
  job.status = status;
  renderJobs();
}

function deleteJob(id) {
  const index = jobs.findIndex(j => j.id === id);
  jobs.splice(index, 1);
  renderJobs();
}

function updateDashboard() {
  totalCount.innerText = jobs.length;
  interviewCount.innerText = jobs.filter(j => j.status === "interview").length;
  rejectedCount.innerText = jobs.filter(j => j.status === "rejected").length;
}



renderJobs();