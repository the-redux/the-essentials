import React from 'react';
import { useParams } from 'react-router-dom';

export const SinglePostPage = () => {
  const { id } = useParams();
  return (
    <div>
      Single Post Page {id}
    </div>
  );
};
