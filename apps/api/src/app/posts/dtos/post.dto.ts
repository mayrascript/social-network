import { ApiProperty } from '@nestjs/swagger';

export class PostDto {
  @ApiProperty()
  readonly _id: string;

  @ApiProperty()
  readonly comment: string;

  @ApiProperty()
  readonly public : string;
}
