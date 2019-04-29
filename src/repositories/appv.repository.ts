import { DefaultCrudRepository } from '@loopback/repository';
import { Appv } from '../models';
import { DbDataSource } from '../datasources';
import { inject } from '@loopback/core';
import { Exception } from 'handlebars';

export class AppvRepository extends DefaultCrudRepository<
  Appv,
  typeof Appv.prototype.id
  > {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Appv, dataSource);
  }

  async seed() {

    if ((await this.count()).count == 0) {
      this.create(new Appv());
    }
  }

  async get(): Promise<Appv> {

    await this.seed();
    return (await this.findOne()) as Appv;
  }

  async getBookCounter(): Promise<number> {
    return (await this.get()).bookCounter;
  }
  async addBookCounter(): Promise<void> {
    let v = await this.get();
    v.bookCounter += 1;
    await this.updateById(v.id, v);

  }

}
