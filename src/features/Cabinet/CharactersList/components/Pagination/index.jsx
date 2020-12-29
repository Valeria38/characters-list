import classNames from 'classnames';

import { ITEMS_PER_PAGE } from 'Constants';

import Prev from 'images/prev.svg';
import Next from 'images/next.svg';

import './styles.scss';

const Pagination = ({ total, page, onChange }) => {
  const pagesCount = Math.ceil(total / ITEMS_PER_PAGE);
  const handlePrev = () => {
    page - 1 > 0 && onChange(page - 1);
  };

  const handleNext = () => {
    page + 1 <= pagesCount && onChange(page + 1);
  };

  return (
    <div className="pagination">
      <div className={classNames('pagination--item', { disabled: page === 1 })} onClick={handlePrev}>
        <Prev className={classNames('pagination--icon', { disabled: page === 1 })} />
      </div>
      {Array(pagesCount)
        .fill(null)
        .map((_, index) => (
          <div
            key={index}
            className={classNames('pagination--item', { active: index + 1 === page })}
            onClick={() => onChange(index + 1)}
          >
            {index + 1}
          </div>
        ))}
      <div className={classNames('pagination--item', { disabled: page === pagesCount })} onClick={handleNext}>
        <Next className={classNames('pagination--icon', { disabled: page === pagesCount })} />
      </div>
    </div>
  );
};

export default Pagination;
