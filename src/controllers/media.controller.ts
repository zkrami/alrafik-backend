import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Media} from '../models';
import {MediaRepository} from '../repositories';

export class MediaController {
  constructor(
    @repository(MediaRepository)
    public mediaRepository : MediaRepository,
  ) {}

  @post('/media', {
    responses: {
      '200': {
        description: 'Media model instance',
        content: {'application/json': {schema: {'x-ts-type': Media}}},
      },
    },
  })
  async create(@requestBody() media: Media): Promise<Media> {
    return await this.mediaRepository.create(media);
  }

  @get('/media/count', {
    responses: {
      '200': {
        description: 'Media model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Media)) where?: Where,
  ): Promise<Count> {
    return await this.mediaRepository.count(where);
  }

  @get('/media', {
    responses: {
      '200': {
        description: 'Array of Media model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Media}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Media)) filter?: Filter,
  ): Promise<Media[]> {
    return await this.mediaRepository.find(filter);
  }

  @patch('/media', {
    responses: {
      '200': {
        description: 'Media PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() media: Media,
    @param.query.object('where', getWhereSchemaFor(Media)) where?: Where,
  ): Promise<Count> {
    return await this.mediaRepository.updateAll(media, where);
  }

  @get('/media/{id}', {
    responses: {
      '200': {
        description: 'Media model instance',
        content: {'application/json': {schema: {'x-ts-type': Media}}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<Media> {
    return await this.mediaRepository.findById(id);
  }

  @patch('/media/{id}', {
    responses: {
      '204': {
        description: 'Media PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody() media: Media,
  ): Promise<void> {
    await this.mediaRepository.updateById(id, media);
  }

  @put('/media/{id}', {
    responses: {
      '204': {
        description: 'Media PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() media: Media,
  ): Promise<void> {
    await this.mediaRepository.replaceById(id, media);
  }

  @del('/media/{id}', {
    responses: {
      '204': {
        description: 'Media DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.mediaRepository.deleteById(id);
  }
}
