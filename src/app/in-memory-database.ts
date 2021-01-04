import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDatabase implements InMemoryDbService {
    createDb() {
        const data: any = [
            { data: 1609723516775 }        ];
        return { data };
    }
}
