import {DefaultCrudRepository} from '@loopback/repository';
import {Media} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class MediaRepository extends DefaultCrudRepository<
  Media,
  typeof Media.prototype.id
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Media, dataSource);
  }
}
