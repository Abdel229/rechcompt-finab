import { PropTypes } from 'prop-types';

function HeaderTitle(props) {
  const { title } = props;

  return (
    <section>
      <h1>{title}</h1>
    </section>
  );
}

HeaderTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default HeaderTitle;
