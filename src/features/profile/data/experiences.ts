import type { Experience } from "../types/experiences";

export const EXPERIENCES: Experience[] = [
  {
    id: "hive-dynamics",
    companyName: "Hive Dynamics",
    companyLogo: "https://api.dicebear.com/7.x/shapes/svg?seed=Hive+Dynamics",
    positions: [
      {
        id: "sde-intern",
        title: "SDE Intern",
        employmentPeriod: {
          start: "03.2026",
        },
        employmentType: "Internship",
        icon: "code",
        description: `- Engineered Multi-Camera Video Analytics: Refined YOLO and OpenCV pipelines for precise body detection and human activity tracking across active workspaces, enabling continuous automated productivity analysis.
- Implemented Robust Person ReID & Facial Recognition: Integrated ArcFace alongside deep Person Re-Identification (ReID) models to maintain consistent identity tracking of personnel across disparate camera angles and occlusions.
- Optimized High-Throughput MLOps Infrastructure: Architected a containerized Docker pipeline utilizing HLS streaming protocols and Vector Databases to ingest live camera feeds, process high-dimensional embeddings, and deliver sub-millisecond similarity matching.
- Integrated Multimodal AI Models: Implemented Vision-Language Models (VLMs) to provide semantic context to the tracked behaviors, translating raw OpenCV/YOLO coordinates into high-level, actionable workflow insights.`,
        skills: [
          "Python",
          "OpenCV",
          "YOLO",
          "Docker",
          "MLOps",
          "Vector DB",
          "ArcFace",
          "ReID",
          "Computer Vision",
        ],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: true,
    theme: true,
  },
  {
    id: "heritage-institute",
    companyName: "Heritage Institute Of Technology",
    companyLogo: "https://api.dicebear.com/7.x/shapes/svg?seed=Heritage",
    positions: [
      {
        id: "btech-cse",
        title: "B.Tech in Computer Science and Engineering",
        employmentPeriod: {
          start: "07.2024",
        },
        employmentType: "Education",
        icon: "education",
        description: `YGPA - 9.35
Located in Kolkata, WB, India.`,
        skills: [],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: false,
    theme: true,
  }
];
