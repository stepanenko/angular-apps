import { VoteComponent } from './vote.component';

describe('VoteComponent', () => {

  it('should increment totalVotes when upvoted', () => {
    // Arrange
    const component = new VoteComponent;

    // Act
    component.upVote();

    // Assert
    expect(component.totalVotes).toBe(1);
  });

  it('should decrement totalVotes when downvoted', () => {
    const component = new VoteComponent;

    component.downVote();

    expect(component.totalVotes).toBe(-1);
  });
});
