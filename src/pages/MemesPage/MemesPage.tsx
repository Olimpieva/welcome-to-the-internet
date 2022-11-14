import { Image } from 'antd';
import React, { useEffect } from 'react';
import { fetchMemes } from 'redux/memes/actions';
import { selectMemes, selectMemesLoading } from 'redux/memes/selectors';
import { useAppSelector, useAppThunkDispatch } from 'utils/hooks';

import css from './MemesPage.module.scss';

function MemesPage() {
  const dispatch = useAppThunkDispatch();
  const memes = useAppSelector(selectMemes);
  const { loaded: isMemesLoaded } = useAppSelector(selectMemesLoading);

  useEffect(() => {
    dispatch(fetchMemes());
  }, [dispatch]);

  console.log({ memes });
  return (
    <div className={css.page}>
      Hello, Memes!
      {!isMemesLoaded ? (
        <div>Loading...</div>
      ) : (
        <Image width={300} src={memes.url} alt="meme" className={css.image} preview={false} />
      )}
    </div>
  );
}

export default MemesPage;
