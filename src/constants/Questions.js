import newId from '../util/idGenerator';

export const QuestionDescriptions = [{
  text: 'Single Line Text',
  type: 'OPENENDED'
}, {
  text: 'Multiple Choice',
  type: 'MULTIPLECHOICE'
}];

export const QuestionTypes = {
  OPENEDED: 'OPENENDED',
  MULTIPLECHOICE: 'MULTIPLECHOICE'
};

export const InitQuestions = {
  [QuestionTypes.MULTIPLECHOICE]: () => ({
    "_id": newId(),
    "type": QuestionTypes.MULTIPLECHOICE,
    "title": "Select a choice",
    "options": [
      {
        "_id": newId(),
        "content": "First choice"
      },
      {
        "_id": newId(),
        "content": "Second choice"
      },
      {
        "_id": newId(),
        "content": "Third choice"
      },
      {
        "_id": newId(),
        "content": "Fourth choice"
      }
    ]
  }),
  [QuestionTypes.OPENENDED]: () => ({
    "_id": newId(),
    type: QuestionTypes.OPENENDED,
    title: 'Untitled',
    placeholder: ''
  }),
  'abc': () => ({
    "_id": newId(),
    type: 'MULTIPLECHOICE',
    title: 'Evaluate the following statements',
    questions: [
      {
        _id: newId(),
        content: 'First Question'
      },
      {
        _id: newId(),
        content: 'Second Question'
      },
      {
        _id: newId(),
        content: 'Third Question'
      },
      {
        _id: newId(),
        content: 'Fourth Question'
      }],
    options: [
      {
        "_id": newId(),
        "content": "First choice"
      },
      {
        "_id": newId(),
        "content": "Second choice"
      },
      {
        "_id": newId(),
        "content": "Third choice"
      },
      {
        "_id": newId(),
        "content": "Fourth choice"
      }
    ]
  })
};

