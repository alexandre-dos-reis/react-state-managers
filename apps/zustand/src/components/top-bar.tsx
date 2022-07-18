import { Button, Grid } from '@chakra-ui/react';
import { useTodoStore } from '../store';
import { ColorModeSwitcher } from './color-mode-switcher';
import { environment as env } from '../environments/environment';
import { TodosGetAllResponse } from '@react-state-managers/api-interface';
import { useCallback, useEffect } from 'react';

export function TopBar() {
  const onGet = useTodoStore((s) => s.onGet);

  const onLoad = useCallback(() => {
    fetch(`${env.api}/todos`)
      .then((res) => res.json())
      .then((data: TodosGetAllResponse) => onGet(data.todos));
  }, [onGet]);

  useEffect(() => {
    onLoad();
  }, [onLoad]);

  return (
    <Grid pt={2} templateColumns="1fr 1fr" columnGap="3">
      <ColorModeSwitcher />
      <Button onClick={onLoad}>Load</Button>
    </Grid>
  );
}
