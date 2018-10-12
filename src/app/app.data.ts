export class Course {
  grade: number
  name: string
  type: string
  weight: number
}

export class Learner {
  coursesCompleted: Course[]
  name: string
}

export const learnersSchema: Learner[] = [
  {
    name: 'Leo',
    coursesCompleted: [{
      grade: 7,
      name: 'ProChef',
      type: 'LearningPath',
      weight: 4
    }]
  },
  {
    name: 'Lara',
    coursesCompleted: [{
      grade: 8,
      name: 'Hygiene',
      type: 'Standalone',
      weight: 1
    },
    {
      grade: 7,
      name: 'Cocktails',
      type: 'Standalone',
      weight: 4
    },
    {
      grade: 5,
      name: 'Ice specialist',
      type: 'Standalone',
      weight: 3
    }]
  }
]

