import css from 'components/Profile/Profile.module.css';
import PropTypes from 'prop-types';

export const Profile = ({ User }) => {
  return (
    <div className={css.profile}>
      <div className="description">
        <img src={User.avatar} alt="User avatar" className={css.avatar} />
        <p className={css.name}>{User.username}</p>
        <p className={css.tag}>@{User.tag}</p>
        <p className={css.location}>{User.location}</p>
      </div>

      <ul className={css.stats}>
        <li className={css.stats_item}>
          <span className={css.label}>Followers</span>
          <span className={css.quantity}>{User.stats.followers}</span>
        </li>
        <li className={css.stats_item}>
          <span className={css.label}>Views</span>
          <span className={css.quantity}>{User.stats.views}</span>
        </li>
        <li className={css.stats_item}>
          <span className={css.label}>Likes</span>
          <span className={css.quantity}>{User.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
Profile.propTypes = {
  Username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};
