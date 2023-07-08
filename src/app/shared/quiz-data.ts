export interface Question {
  id: number;
  text: string;
  options: string[];
  answer: string;
  userAnswer?: string;
}

export const QUIZZES: Question[][] = [
  [
    {
      id: 1,
      text: "What is the leading cause of cardiovascular disease?",
      options: ["High blood pressure", "Smoking", "Obesity", "Diabetes"],
      answer: "High blood pressure"
    },
    {
      id: 2,
      text: "Which of the following is a symptom of a heart attack?",
      options: ["Chest pain", "Headache", "Joint pain", "Stomach ache"],
      answer: "Chest pain"
    },
    {
      id: 3,
      text: "What is the normal resting heart rate for adults?",
      options: ["60-100 beats per minute", "120-150 beats per minute", "30-50 beats per minute", "Over 150 beats per minute"],
      answer: "60-100 beats per minute"
    },
    {
      id: 4,
      text: "Which of the following is a risk factor for cardiovascular disease?",
      options: ["Smoking", "Regular exercise", "Healthy diet", "Normal body weight"],
      answer: "Smoking"
    },
    {
      id: 5,
      text: "What is the recommended amount of aerobic exercise per week for adults?",
      options: ["150 minutes", "30 minutes", "60 minutes", "300 minutes"],
      answer: "150 minutes"
    }
  ],
  [
    {
      id: 1,
      text: "What is the primary function of the heart?",
      options: ["Pump blood", "Digest food", "Filter waste", "Produce hormones"],
      answer: "Pump blood"
    },
    {
      id: 2,
      text: "Which of the following is a modifiable risk factor for cardiovascular disease?",
      options: ["Age", "Gender", "Family history", "Smoking"],
      answer: "Smoking"
    },
    {
      id: 3,
      text: "What is a common symptom of peripheral artery disease?",
      options: ["Leg pain during walking", "Chest pain", "Shortness of breath", "Numbness in the hands"],
      answer: "Leg pain during walking"
    },
    {
      id: 4,
      text: "Which of the following is a healthy dietary choice to prevent cardiovascular disease?",
      options: ["Eating fruits and vegetables", "Consuming sugary drinks", "Eating processed foods", "High sodium intake"],
      answer: "Eating fruits and vegetables"
    },
    {
      id: 5,
      text: "What is the recommended blood pressure level for adults?",
      options: ["Less than 120/80 mmHg", "Greater than 140/90 mmHg", "Between 120/80 and 130/85 mmHg", "Between 130/85 and 140/90 mmHg"],
      answer: "Less than 120/80 mmHg"
    }
  ],
  // Add more quizzes...
];
