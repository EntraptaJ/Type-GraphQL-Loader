// src/API/HelloWorld/index.ts
// Kristian Jones <me@kristianjones.xyz>
import { Resolver, Query } from 'type-graphql';

@Resolver()
export default class TestResolver {
  @Query(returns => String)
  public async HelloWorld(): Promise<string> {
    return 'Hello World';
  }
}
