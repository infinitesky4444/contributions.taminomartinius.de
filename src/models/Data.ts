import {
  Dict,
  TimeStats,
} from '@/types';

const GITHUB_USER_LOGIN = 'tamino-martinius';

export class Data {
  constructor() {

  }

  async getStats(): Promise<TimeStats> {
    const response = await fetch(`/${GITHUB_USER_LOGIN}.json`);
    const data: TimeStats = await response.json();
    return data;
  }

  async getRepoStats(): Promise<Dict<TimeStats>> {
    const response = await fetch(`/${GITHUB_USER_LOGIN}-repositories.json`);
    const data: Dict<TimeStats> = await response.json();
    return data;
  }
}

export default Data;
