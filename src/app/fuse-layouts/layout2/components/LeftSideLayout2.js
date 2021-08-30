import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchNewsData } from 'app/store/pages/newsSlice';

function LeftSideLayout2() {

	let dispatch = useDispatch();

	useEffect( () => {
		const fetchBaseData = async() => {
			dispatch(fetchNewsData());
		}

		fetchBaseData();
	})

	return <></>;
}

export default React.memo(LeftSideLayout2);
