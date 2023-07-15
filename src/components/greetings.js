import React, { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import setGreeting from '../redux/actions/greetingActions';

function Greetings() {
  const greeting = useSelector((state) => state.greeting.text);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('https://hello-rails-react-backend.onrender.com/greetings')
      .then((response) => response.json())
      .then((data) => {
        dispatch(setGreeting(data.greeting));
      })
      .catch((error) => {
        console.error(error);
      });
  }, [dispatch]);

  return (
    <h1>
      {greeting}
      !
    </h1>
  );
}

const mapStateToProps = (state) => ({
  greeting: state.greeting.text,
});

export default connect(mapStateToProps)(Greetings);
