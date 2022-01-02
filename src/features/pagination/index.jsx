import React from "react";
import PropTypes from "prop-types";

Pagination.propTypes = {
  Pagination: PropTypes.object,
  onpageChange: PropTypes.func,
};
Pagination.defaultProps = {
  Pagination: {},
  onpageChange: null,
};
function Pagination(props) {
  const { Pagination, onpageChange } = props;
  const { _page, _limit, _totalRows } = Pagination;
  const totalPages = Math.ceil(_totalRows / _limit);
  function handelPageChange(newPage) {
    if (onpageChange) {
      onpageChange(newPage);
    }
  }
  return (
    <div>
      <button disabled={_page <= 1} onClick={() => handelPageChange(_page - 1)}>
        Prev
      </button>
      <button
        disabled={_page >= totalPages}
        onClick={() => handelPageChange(_page + 1)}
      >
        Prev
      </button>
    </div>
  );
}

export default Pagination;
