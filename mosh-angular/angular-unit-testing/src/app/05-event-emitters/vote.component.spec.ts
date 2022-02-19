import { VoteComponent } from './vote.component';

describe('VoteComponent', () => {
  let component: VoteComponent;

  beforeEach(() => {
    component = new VoteComponent();
  });

  it('should emit', () => {
    component.totalVotes = null;
    component.voteChanged.subscribe(tv => component.totalVotes = tv);

    component.upVote();

    expect(component.voteChanged).not.toBeNull();
    expect(component.totalVotes).toBe(1);

  });

});
