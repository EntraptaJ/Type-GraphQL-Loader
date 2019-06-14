// src/API/GoodbyeWorld/Goodbye.ts
// Kristian Jones <me@kristianjones.xyz>
import { Resolver, Query } from 'type-graphql';

@Resolver()
export default class TestResolver {
  @Query(returns => String)
  public async GoodbyeWorld(): Promise<string> {
    return 'Goodbye World';
  }
}
