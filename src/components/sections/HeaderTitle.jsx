import { PropTypes } from 'prop-types';

function HeaderTitle(props) {
  const { title } = props;

  return (
    <section className="page_header">
      <h1>{title}</h1>
    </section>
  );
}

HeaderTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default HeaderTitle;
