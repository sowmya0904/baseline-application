const sortPosts = (posts) => {
  console.log('Sorting posts...');
  // Create a copy of the array before sorting to avoid mutating the original array
  return [...posts].sort((a, b) => b.id - a.id);
};

export default sortPosts;