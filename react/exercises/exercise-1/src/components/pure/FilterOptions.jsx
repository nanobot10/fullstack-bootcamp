import React from 'react';
import FilterContainer from '../containers/FilterContainer';
import TodoContainer from '../containers/TodoContainer';

const FilterOptions = (  ) => {
    return (
        <div>
            <FilterContainer filter="SHOW_ALL">
                ALL
            </FilterContainer>
            <FilterContainer filter="SHOW_ACTIVE">
                ACTIVE
            </FilterContainer>
            <FilterContainer filter="SHOW_COMPLETED">
                COMPLETED
            </FilterContainer>
        </div>
    );
}

export default FilterOptions;
