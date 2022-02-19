
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { VoterComponent } from './voter.component';
import { By } from '@angular/platform-browser';

describe('VoterComponent', () => {
  let component: VoterComponent;
  let fixture: ComponentFixture<VoterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ VoterComponent ]
    });

    fixture = TestBed.createComponent(VoterComponent);
    component = fixture.componentInstance;
    // fixture.nativeElement;
    // fixture.debugElement;
  });

  it('should render total votes', () => {
    component.othersVote = 20;
    component.myVote = 1;
    fixture.detectChanges();

    const de = fixture.debugElement.query(By.css('.vote-count'));
    const el: HTMLElement = de.nativeElement;

    expect(el.innerText).toContain('21');
  });

  it('should highlight the upvoted button', () => {
    component.myVote = 1;
    fixture.detectChanges();

    const de = fixture.debugElement.query(By.css('.vote-button'));

    expect(de.classes['highlighted']).toBeTruthy();
  });

  it('should run an event', () => {
    component.myVote = null;

    component.upVote();

    expect(component.myVote).toBe(1); // from unit tests example (this Mosh suggests to put in a separate file)
  });

  it('should increase total votes when clicked', () => {
    const button = fixture.debugElement.query(By.css('.vote-button'));
    button.triggerEventHandler('click', null);

    expect(component.totalVotes).toBe(1);
  });

});
