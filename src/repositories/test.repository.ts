import {DefaultCrudRepository} from '@loopback/repository';
import {Test} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class TestRepository extends DefaultCrudRepository<
  Test,
  typeof Test.prototype._id
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Test, dataSource);
  }
}
