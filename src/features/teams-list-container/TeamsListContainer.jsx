import { createRef, useCallback, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { currentTeam } from '../../components/app-container/teamMousesSlice';
import { TeamCatContainer } from '../team-cat-container/TeamCatContainer';
import { addNewTeam, selectTeams } from './TeamsListSlice';

const TeamsListContainer = () => {
  const teams = useSelector(selectTeams);
  const dispatch = useDispatch();
  const { current: containersObservable } = useRef([]);
  const { current: refs } = useRef([]);
  const { current: intersectionObserver } = useRef(new IntersectionObserver((entries) => {
    entries.forEach(({ target, isIntersecting }) => {
      if ((target.dataset.id === containersObservable[containersObservable.length - 1]?.id) && isIntersecting) {
        dispatch(addNewTeam());
      }

      const observableIndex = containersObservable.findIndex(({ id }) => id === target.dataset.id);

      if (observableIndex > -1) {
        containersObservable[observableIndex].isIntersecting = isIntersecting;
      } else {
        containersObservable.push({
          id: target.dataset.id,
          isIntersecting
        })
      }
    });

    const firstIntersectingContainer = containersObservable.find(observable => observable.isIntersecting);

    if (firstIntersectingContainer) {
      dispatch(currentTeam(parseInt(firstIntersectingContainer.id)));
    }
  }, {
    //root: containerRef.current,
    rootMargin: '-150px 0px 100px 0px', 
    //threshold: 1
  }));

  if (teams.length > refs.length) {
    const countNewRefs = teams.length - refs.length;
    for (let i = 0; i < countNewRefs; i++) {
      refs.push(createRef());
    }
  }

  const observeRef = useCallback((refs, observer) => {
    refs.forEach(ref => {
      observer.observe(ref.current)
    });
  }, []);

  useEffect(() => {
      observeRef(refs, intersectionObserver);
      refs.length = 0;
  }, [intersectionObserver, observeRef, refs, teams]);

  return (
    <>
      {
        teams.map((team, index) => (
          <TeamCatContainer key={team.number} ref={refs[index]} team={team} />
        ))
      }
    </>
  )
}

export { TeamsListContainer }