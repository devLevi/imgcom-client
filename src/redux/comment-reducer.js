const initialState = {
  images: [
    {
      url: 'https://picsum.photos/500/375',
      comment: ['comment1', '2ndComment1']
    },
    {
      url: 'imageurl2',
      comment: ['comment2']
    },
    {
      url: 'imageurl3',
      comment: ['comment3']
    },
    {
      url: 'imageurl4',
      comment: ['comment4']
    },
    {
      url: 'imageurl5',
      comment: ['comment5']
    },
    {
      url: 'imageurl6',
      comment: ['']
    }
  ]
};

export default function commentReducer(state = initialState, action) {
  return state;
}
