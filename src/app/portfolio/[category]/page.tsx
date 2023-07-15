import React from 'react';

interface CategoryProps {
  params: { category: string };
}

const Category: React.FC<CategoryProps> = ({ params }) => {
  console.log(params);

  return null;
};

export default Category;
